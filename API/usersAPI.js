//importing mini-express module
const exp=require("express");
const userApp=exp.Router();

userApp.use(exp.json());






//all users
userApp.get('/users',async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj");

    let usersList= await userCollectionObj.find().toArray()
    res.status(200).send({
        message:"All users",
        payload:usersList
    })
    
   
})

//req user
userApp.get('/user/:id',async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj");

    const userId=(+req.params.id);

    let user=await userCollectionObj.findOne({id:userId})
    
        res.status(200).send({
            message:"Single User",
            payload:user
        })

  
    

})


//creating a user

userApp.post('/create-user',async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj")

    const newUser=req.body;

   let newUserObj=await userCollectionObj.insertOne(newUser)
   
        res.status(201).send({
            message:"user created"
        })

  
   
   
})


//udating a user
userApp.put('/update-user',async(req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj")

    const modifiedUser=req.body;

    let muser= await userCollectionObj.updateOne({id:modifiedUser.id},{$set:{...modifiedUser}})
   
       
        res.status(201).send({
            message:"user modified"
        })
    
    
})


//deleting a user
userApp.delete('/delete-user/:id',async (req,res)=>{
    const userCollectionObj=req.app.get("userCollectionObj")
    const userid=(+req.params.id);

   let duser=await userCollectionObj.deleteOne({id:userid})
    
        res.status(200).send({
            message:"user deleted"
        })
   
    
    
})
















// exporting userApi to server2.js
module.exports=userApp;