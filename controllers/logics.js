const File = require("../models/model")

const getLists=async(req,res)=>{
try {
const lists=await File.find()
res.status(200).json({
    status:"success",
    count:lists.length,
    data:{
        lists
    }
})
} catch (error) {
res.status(400).json({
    status:"fail",
    message:error.message
})
}
}
const postFile=async(req,res)=>{
    try {
        console.log(req.file);
        const { filename, originalname, path, mimetype, size } = req.file;

    const newFile = new File({
      filename,
      originalname,
      path,
      mimetype,
      size,
    });

       
        console.log(newFile);
          await newFile.save();
        res.status(201).json({
            status:"success",
            data:{
                newFile
            }
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
        
    }
}
const deleteFile=async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        // console.log(req.params._id);
        let data=await File.deleteOne({_id:id})
        console.log(data);
        res.status(201).json({
            status:"success",
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}



module.exports={getLists,postFile,deleteFile}