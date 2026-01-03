const DemoItem = require('../models/DemoItem');
const { sendSuccess, sendError } = require('../utils/responseHelper');

// @desc    Get all demo items
// @route   GET /api/v1/demo
// @access  Public
exports.getDemoItems = async (req, res) => {
  try {
    const items = await DemoItem.find();
    sendSuccess(res, items, 'Demo items retrieved successfully');
  } catch (err) {
    sendError(res, 'Server Error', 500, err);
  }
};

// @desc    Get single demo item
// @route   GET /api/v1/demo/:id
// @access  Public
exports.getDemoItem = async (req, res) => {
  try {
    const item = await DemoItem.findById(req.params.id);
    if (!item) {
      return sendError(res, 'Item not found', 404);
    }
    sendSuccess(res, item, 'Demo item retrieved successfully');
  } catch (err) {
    sendError(res, 'Server Error', 500, err);
  }
};

// @desc    Create new demo item
// @route   POST /api/v1/demo
// @access  Public
exports.createDemoItem = async (req, res) => {
  try {
    const item = await DemoItem.create(req.body);
    sendSuccess(res, item, 'Demo item created successfully', 201);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return sendError(res, 'Validation Error', 400, err);
    }
    sendError(res, 'Server Error', 500, err);
  }
};

// @desc    Update demo item
// @route   PUT /api/v1/demo/:id
// @access  Public
exports.updateDemoItem = async (req, res) => {
  try {
    const item = await DemoItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return sendError(res, 'Item not found', 404);
    }
    sendSuccess(res, item, 'Demo item updated successfully');
  } catch (err) {
    sendError(res, 'Server Error', 500, err);
  }
};

// @desc    Delete demo item
// @route   DELETE /api/v1/demo/:id
// @access  Public
exports.deleteDemoItem = async (req, res) => {
  try {
    const item = await DemoItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return sendError(res, 'Item not found', 404);
    }
    sendSuccess(res, {}, 'Demo item deleted successfully');
  } catch (err) {
    sendError(res, 'Server Error', 500, err);
  }
};
