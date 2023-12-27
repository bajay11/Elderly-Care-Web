const cloudinary=require("cloudinary").v2;
const multer=require("multer");
const {CloudinaryStorage}=require('multer-storage-cloudinary')

// configuration of cloudinary
cloudinary.config({
    cloud_name:"*******",
    api_key:"********",
    api_secret:"*********"
})

// configure cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"vnr23",
        // time stamp is used to differentiate the items in the worst case if all the parameters are matched the time will be different
        public_id:(req,file)=>file.fieldname+"-"+Date.now()
    
    }
})

// config of multer
let multerObj=multer({storage:clStorage})
module.exports=multerObj;
// these export should be imported in tem2 which a userApi
