const express=require('express');
const router=express.Router();
router.get('/addproduct',(req,res,next)=>{
    console.log("we are in secondmiddleWare");
    res.send('<form action="/product" method="post"><input type="text" name="name"><button type="button">Add Value</button></form>');

})
router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});
module.exports=router;