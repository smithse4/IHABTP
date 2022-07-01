const router = require('express').Router();
const {
  getBones,
  createBone,
} = require('../../controllers/bone-controller');

// /api/thoughts
router.route('/').get(getBones).post(createBone);

module.exports = router;
