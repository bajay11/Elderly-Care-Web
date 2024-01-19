
// import exp module
const exp=require("express");
const app=exp();
app.listen(xxxxx,()=>{
    console.log("listening on port number 8500");
})

const path=require("path");

app.use(exp.static(path.join(__dirname,"./build")));

//connection to the database
//1.install mongodb file
//2.import mongo client

const mclient=require("mongodb").MongoClient

mclient.connect("xxxxxxx")
.then((dbRef)=>{
        const dbObj=dbRef.db("userdb");
        const userCollectionObj=dbObj.collection("userscollection");
        const productCollectionObj=dbObj.collection("productscollection");

        app.set("userCollectionObj",userCollectionObj)
        app.set("productCollectionObj",productCollectionObj)

        console.log("hari bol !!!!! connected to database")

})
.catch((err)=>{
    console.log("error generated is",err)
})



//importing usersApi and productsApi
const userApp=require("./API/temp2");
const productApp=require("./API/productsAPI"); 
// const { DBRef } = require("mongodb");

//making the path clear
app.use('/user-api',userApp);
app.use('/product-api',productApp);



// app.use('/*',(req,res,next)=>{
//     res.sendFile(path.join(__dirname,"./build/index.html"),err=>{
//         if(err)
//         next(err);
//     })
// })



const refreshP=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'))

}
app.use('*',refreshP)






// these two middlewares should be at the last and they act for entire server
// middleware for handling invalid paths
const invalidPathMiddleware=(req,res,next)=>{
    res.send({
        message:"Invalid Path !!! Please check it"
    })
}
app.use("*",invalidPathMiddleware);


// middleware for handling errors
const errHandlingMiddleware=(err,req,res,next)=>{
    res.send({
        message:err.message
    })
}
app.use(errHandlingMiddleware);
