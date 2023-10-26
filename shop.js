
const path=require('path');
const express=require('express');
const router=express.Router();
const rootDir=require('../util/path');
router.get('/',(req,res,next)=>{
   // console.log("in onether express module");
   // res.send("<h1>Hay Welcome to express js</h1>")
res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports=router;