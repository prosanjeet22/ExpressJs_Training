const path=require('path');
const express=require('express');
const router=express.Router();
const rootDir=require('../util/path');
router.get('/addproduct',(req,res,next)=>{
    console.log("we are in secondmiddleWare");
    //res.send('<form action="/product" method="post"><input type="text" name="name"><button type="button">Add Value</button></form>');
res.sendFile(path.join(rootDir,'views','add-product.html'));
})
router.post('/addproduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});
module.exports=router;