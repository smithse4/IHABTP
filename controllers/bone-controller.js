const { Bone } = require('../models');

const boneController = {
  // get all bones
  getBones(req, res) {
    Bone.find()
      .then((dbBoneData) => {
        res.json(dbBoneData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // create a bone
  createBone(req, res) {
    Bone.create(req.body)
      .then((dbBoneData) => {
        res.json(dbBoneData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = boneController;
