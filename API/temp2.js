//importing mini-express module
const exp=require("express");
const userApp=exp.Router();

userApp.use(exp.json());

const bcrypts=require("bcrypt")
const jwtToken=require("jsonwebtoken")

const verifyToken=require('./middlewares/verifyJwtToken')

let expErrHandler=require("express-async-handler");
const verifyTokens = require("./middlewares/verifyJwtToken");

// Importing multerObj
const multerObj=require('./middlewares/cloudinaryConfig');

//how to handle errs
//1 way ---traditional method
//2 way using---express-asunc-handler




//generally in user registrations username should not be repeated and password should not be in original form it should be hashed




//all users
userApp.get('/users',expErrHandler(async (req,res)=>{
        const userCollectionObj=req.app.get("userCollectionObj");
    
        let usersList=await userCollectionObj.find().toArray()
        res.status(201).send({
            message:"all the users",
            payload:usersList
        })
      
    }))





//req user
// userApp.get('/user/:id',expErrHandler(
//     async (req,res)=>{
//         const userCollectionObj=req.app.get("userCollectionObj");
    
//         const userId=(+req.params.id);
    
//         let userObj=await userCollectionObj.findOne({id:userId})
//         res.status(200).send({
//             message:"Single User",
//             payload:userObj
//         })
    
//     }
// ))

//searching a user by his userName

userApp.get('/user/:userName',expErrHandler(async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj");

    // geting username from url
    const userNameFromUrl=req.params.userName;

    //checking whether url exist or not 
    const userDB=await userCollectionObj.findOne({userName:userNameFromUrl})

    //if not exist
    if(userDB===null){
        res.status(200).send({message:"User Not Found"});
    }else{
        //if exist

        //and removing the password 
        delete userDB.password;
        delete userDB.id
        res.status(201).send({
            message:"the user is",
            payload:userDB
        })
    }



}))


















//creating a user
// in the user-reg add the multer obj
//multerObj.single("photo"),
userApp.post('/user-reg',multerObj.single('selectedFile'),expErrHandler(
    async (req,res)=>{
        const userCollectionObj=req.app.get("userCollectionObj")
        
        //  json.parse converts a string into object
        // i used only req.body.user it also contains the photo
        
        const newUser=JSON.parse(req.body.user); 
      
        // check whether user already exist or not
        //if exist findone method will return obj if not it will return null
        let userObj=await userCollectionObj.findOne({userName:newUser.userName})
        // user exists
        if(userObj!==null)
        {
            res.status(200).send({
                message:"user already existed"
            })
        }
        // user not exists
        else{
            

            // the cdn as to be apended to the new user
            // req.file.path;
             newUser.image= req.file.path;
           

            //hash the password and store it using bcrypt method
            let hashedPassword=await bcrypts.hash(newUser.password,5);
            // console.log(hashedPassword);
            //change the password into hashed password
            newUser.password=hashedPassword;

            // insert new user
            await userCollectionObj.insertOne(newUser)
            res.status(201).send({
                message:"user registered  successfully"
            })}
       
    }
))

userApp.put('/user-upload/:userName',multerObj.single('selectedFiles'),expErrHandler(async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj");
    let userNameFromProfile=req.params.userName;  
   
    await userCollectionObj.updateOne({userName:userNameFromProfile},{$set:{"uploads":req.file.path}})
    res.status(201).send({
        message:"uploaded successfully"
    })    
}))

// updating user health profile
userApp.put('/user-healthUpdate/:userName',expErrHandler(async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj");
    let userNameFromProfile=req.params.userName;
    let d=req.body;  
   
    await userCollectionObj.updateOne({userName:userNameFromProfile},{$set:{"healthData":d}})
    res.status(201).send({
        message:"modified successfully"
    })    
}))


userApp.post('/user-login',expErrHandler(async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj");
   
    const userOBJ=req.body;

    let userFromDB=await userCollectionObj.findOne({userName:userOBJ.userName})

    if(userFromDB===null){
        res.status(200).send({message:"User Not Found"})
    }else{
        let resPasword=await bcrypts.compare(userOBJ.password,userFromDB.password)
        if(resPasword===false){
            res.status(200).send({message:"Invalid Password"})
        }
        else{
          
           let jet= jwtToken.sign({userName:userOBJ.userName},"abcdefdfdf",{expiresIn:200})
           delete userFromDB.password;
             res.status(200).send({message:"success",token:jet,user:userFromDB})

        }
    }

}))


//udating a user
userApp.put('/update-user',expErrHandler(
    async(req,res)=>{
        const userCollectionObj=req.app.get("userCollectionObj")
    
        const modifiedUser=req.body;
    
      let m=await  userCollectionObj.updateOne({id:modifiedUser.id},{$set:{...modifiedUser}})
      res.status(201).send({
        message:"user modified"
    })
        
    }
))


// userApp.put('/user-change/:userName',expErrHandler(async(req,res)=>{
//     const userCollectionObj=req.app.get("userCollectionObj")
    
//     const changedUser=req.body;
//     let use=req.params.userName;
//     await  userCollectionObj.updateOne({userName:use},{healthData:changedUser})
//     res.status(201).send({
//         message:"nice"
//     })


// }))





// first after login with correct username and password he shold be allowed to use private routes
// first make the authenticated req it includes authorisaton with bearer scheme
userApp.post('/test',verifyToken,(req,res)=>{
   
    res.send({ 
        message:"authenticated req succeeded"
        
    })

})










//deleting a user
userApp.delete('/delete-user/:id',expErrHandler(
    async (req,res)=>{
        const userCollectionObj=req.app.get("userCollectionObj")
        const userid=(+req.params.id);
    
       let d=await  userCollectionObj.deleteOne({id:userid})
       res.status(201).send({
        message:"user deleted"
    })
    }
))


// userApp.put('/updateItem/:itemId',expErrHandler(async(req,res)=>{
//     const userCollectionObj=req.app.get("userCollectionObj")
//     const userid=(+req.params.id);
//     const mu=req.body;
//     let m=await  userCollectionObj.updateOne({id:userid},{$set:{healthdata:mu}})
//       res.status(201).send({
//         message:"user modified"
//     })
        

// }))





 

















// exporting userApi to server2.js
module.exports=userApp;