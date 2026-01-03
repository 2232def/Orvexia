const mongoose = require('mongoose');

const DemoItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this item'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  description: {
    type: String,
    required: false,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DemoItem', DemoItemSchema);
