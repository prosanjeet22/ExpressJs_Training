//entry point
//const http=require('http');
const express=require('express');

const bodyParser=require('body-parser');
let app=express();
const routesAdmin=require('./routes/admin');
const shoproutes=require('./routes/shop');


const port =3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(routesAdmin);
app.use(shoproutes);
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
})
app.listen(3000);
// app.listen(port,()=>{
//     console.log('server is started');
// })
//const server=http.createServer(app);
//server.listen(port);