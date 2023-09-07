const mongoose=require("mongoose")
const File = mongoose.model('File', {
    filename: String,
    originalname: String,
    path: String,
    mimetype: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  });
  

module.exports=File