const { Schema, model } = require('mongoose');

const boneSchema = new Schema(
  {
    bone: {
      type: String,
      required: "What's your bone to pick?!",
      minlength: 1,
      maxlength: 500
    },
    antagonist: {
        type: String,
        required: 'Who do you have a bone to pick with??',
        minlength: 1,
        maxlength: 280
      }
  }
);

const Bone = model('Bone', boneSchema);

module.exports = Bone;
