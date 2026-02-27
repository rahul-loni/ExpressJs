const express=requires("express");
const { userController, SearchController } = require("./controller");
const { login } = require("./login");
const app=express();

app.use(express.json());
//Routing
app.get('/',(req,res)=>{
    res.send("this is my server home page ")
})
app.get('/users',(req,res)=>{
    res.send("this is my users page  ")
})
app.get('/users/rahul',(req,res)=>{
    res.send("this is rahul page   ")
})
app.get('/users/rahul/kumar',(req,res)=>{
    res.send("this is rahul page   ")
})
app.get('/users/ismtt',(req,res)=>{
    res.send("this is Ismt page   ")
})
// app.post('/users',(req,res)=>{
//     res.send("this is rahul page   ")
// })
//dynamic routes
app.get('/users/:username',userController)
//query routes
app.get('/search',SearchController)
app.get('/login',login)


app.listen(7200,()=>{
    console.log("Server running on http://localhost:7200");
})