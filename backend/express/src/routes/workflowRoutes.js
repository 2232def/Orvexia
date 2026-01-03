const express = require("express");
const router = express.Router();
const {createWorkflow, getworkflows, getWorkflowById} = require("../controllers/workflowController");

router.post("/", createWorkflow);
router.get("/", getworkflows);
router.get("/:id", getWorkflowById);


module.exports = router;
