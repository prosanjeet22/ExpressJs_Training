const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    console.log("in onether express module");
    res.send("<h1>Hay Welcome to express js</h1>")
})

module.exports=router;