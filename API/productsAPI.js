//importing mini-exp module
const exp=require("express");
const productApp=exp.Router();





//all users
productApp.get('/products',(req,res)=>{
    const productCollectionObj=req.app.get("productCollectionObj");

    productCollectionObj.find().toArray()
    .then((productList)=>{
        res.status(201).send({
            message:"All products",
            payload:productList
        })


    })
    .catch((err)=>{
        console.log("the error generated is",err);
        res.send({
            message:"sorry some error is generated while getting all products"
        })
    })
   
})



// single user
productApp.get('/product/:id',(req,res)=>{
    const productCollectionObj=req.app.get("productCollectionObj")
    const productId=(+req.params.id);

    productCollectionObj.findOne({id:productId})
    .then((product)=>{
        res.status(200).send({
            message:"single user",
            payload:product
        })

    })
    .catch(()=>{
        console.log("the err generated is",err);

        res.send({
            message:"sorry error generated while retriveing single user"
        })
    })



})


// creating a user

productApp.post('/create-product',(req,res)=>{
    const productCollectionObj=req.app.get("productCollectionObj")

    const newProd=req.body;

    productCollectionObj.insertOne(newProd)
    .then((dbRef)=>{
       
        res.status(200).send({
            message:"new product  created successfully"
        })

    })
    .catch((err)=>{
        console.log("the err is",err);
        res.send({
            message:"err occured while creating a new product"
        })
    })


})

// updating a user
productApp.put('/update-product',(req,res)=>{
    const productCollectionObj=req.app.get("productCollectionObj")

    const modifiedPro=req.body;

    productCollectionObj.updateOne({id:modifiedPro.id},{$set:{...modifiedPro}})
    .then((dbRef)=>{
        console.log("hai",dbRef);
        res.status(200).send({
            message:"modified successfully"
        })

    })
    .catch((err)=>{
        console.log("the err is",err);
        res.send({
            message:"err occured while modifieng  product"
        })
    })


})

// deleting a user

productApp.delete('/delete-product/:id',(req,res)=>{
    const productCollectionObj=req.app.get("productCollectionObj");

    const productid=(+req.params.id);
    productCollectionObj.deleteOne({id:productid})
    .then(()=>{
        res.status(200).send({
            message:"product deleted"
        })
    })
    .catch((err)=>{
        console.log("the error generated during creation is: ",err)
        res.send({
            message:"sorry there is some error"
        })
    })



})














//exporting productAPi
module.exports=productApp;
