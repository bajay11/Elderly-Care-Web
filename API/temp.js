//importing mini-express module
const exp=require("express");
const userApp=exp.Router();

//creating a dummy list to store data temporarly
let users=[];




//all users
userApp.get('/users',(req,res)=>{
    res.send({
        message:"All the Users",
        payload:users
    })
})

//req user
userApp.get('/user/:id',(req,res)=>{
    let userId=(+req.params.id);

    let user=users.find(userObj=>userObj.id===userId);
    res.send({
        message:"requested user",
        payload:user
    })

})


//creating a user
userApp.use(exp.json());
userApp.post('/create-user',(req,res)=>{
    let newUser=req.body;
    users.push(newUser);
    res.send({
        message:"new user created successfully"
    })
})


//udating a user
userApp.put('/update-user',(req,res)=>{
    let modifiedUser=req.body;
    let existingUser=users.findIndex(userObj=>userObj.id===modifiedUser.id);
    if(!existingUser){
        users.splice(existingUser,1,modifiedUser)
        res.send({
            message:"User updated"
        })
    }
    else
    res.send({
        message:"User needed to modify is not found"
        })
    
})


//deleting a user
userApp.delete('/delete-user/:id',(req,res)=>{
    let userID=(+req.params.id);
    let user=users.findIndex(userObj=>userObj.id===userID)
    users.splice(user,1);
    res.send({
        message:"User Deleted"
    })
})
















// exporting userApi to server2.js
module.exports=userApp;