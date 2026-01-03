const express = require('express');
const router = express.Router();
const {
  getDemoItems,
  getDemoItem,
  createDemoItem,
  updateDemoItem,
  deleteDemoItem,
} = require('../controllers/demoController');

router.route('/')
  .get(getDemoItems)
  .post(createDemoItem);

router.route('/:id')
  .get(getDemoItem)
  .put(updateDemoItem)
  .delete(deleteDemoItem);

module.exports = router;
