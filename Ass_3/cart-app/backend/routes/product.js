const { rawListeners } = require('../models/ProductModel');
const Product = require('../models/ProductModel');
const router = require('express').Router();

router.get('/',(req,res)=>{
    Product.find((error,products)=>{
        if(error){
            res.send(error);
        }else{
            res.send(products);
        }
    })
})
router.post('/',(req,res)=>{
    let product= new Product({
        productId: req.body.productId,
        name :req.body.name,
        description: req.body.description,
        price : req.body.price ,
        quantity: req.body.quantity,
        totalamount:req.body.totalamount
    })
    product.save((error,product)=>{
        if(error){
            res.send(error);
        }
        res.send({'success':true});
    })
})
router.post('/delete',(req,res)=>{
    Product.findOneAndDelete({"productId":req.body.productId},(error,product)=>{
        if(error){
            res.send(error);
        }else{
            res.send({success:"true"})
        }
    })
})
router.put('/',(req,res)=>{
    Product.findOneAndUpdate({"productId":req.body.productId},{
        quantity: req.body.quantity,
        totalamount:req.body.totalamount
    },{new:true},(error,product)=>{
        (error)?res.send(error):res.send({"success":true});
    })
})

module.exports = router;