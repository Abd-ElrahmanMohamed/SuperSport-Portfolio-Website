const mongoose = require('mongoose');

const navigationSchema = new mongoose.Schema(
  {
    links: [
      {
        id: mongoose.Schema.Types.ObjectId,
        label: String,
        path: String,
        order: Number,
      },
    ],
    brandName: String,
    brandLogo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Navigation', navigationSchema);
