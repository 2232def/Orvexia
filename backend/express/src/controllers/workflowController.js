const Workflow = require("../models/workflow-model");
const WorkflowVersion = require("../models/workflowVersion-model");

// 1. Create/Update a Workflow (The "Save" Button)
const createWorkflow = async (req, res) => {
  try {
    const { name, owner_id, triggerSlug, nodes, edges } = req.body;

    // A. Find or Create the "Container" (Workflow)
    let workflow = await Workflow.findOne({ triggerSlug });

    if (!workflow) {
      workflow = await Workflow.create({
        name,
        owner_id,
        triggerSlug,
      });
    }

    // B. Increment Version (Count + 1)
    const count = await WorkflowVersion.countDocuments({
      workflow_id: workflow._id,
    });
    const newVersion = `1.0.${count + 1}`;

    // C. Save the Logic (The "Brain")
    const versionDoc = await WorkflowVersion.create({
      workflow_id: workflow._id,
      version: newVersion,
      definition: { nodes, edges },
    });

    // D. Update the Pointer (Make it Live!)
    workflow.active_version_id = versionDoc._id;
    workflow.is_active = true;
    await workflow.save();

    res.json({ success: true, workflowId: workflow._id, version: newVersion });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getworkflows = async (req, res) => {
    try {
        // Query the "Container" collection
        // We select specific fields to keep the response light and fast.
        const workflows = await Workflow.find()

        res.json(workflows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getWorkflowById = async (req, res) => {
    try {
        const { id } = req.params;

        // Step A: Find the Workflow Metadata
        const workflow = await Workflow.findById(id);
        if (!workflow) {
            return res.status(404).json({ error: "Workflow not found" });
        }

        // Step B: Find the Logic (Nodes & Edges)
        // We check if there is an active version pointer.
        let flowData = { nodes: [], edges: [] };

        if (workflow.active_version_id) {
            const activeVersion = await WorkflowVersion.findById(workflow.active_version_id);
            if (activeVersion) {
                // Return the definition so React Flow can draw it
                flowData = activeVersion.definition; 
            }
        }

        // Step C: Return Combined Data
        // The frontend gets the Name/ID (for the header) AND the Nodes (for the canvas)
        res.json({
            ...workflow.toObject(),
            nodes: flowData.nodes || [],
            edges: flowData.edges || []
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createWorkflow, getworkflows, getWorkflowById };