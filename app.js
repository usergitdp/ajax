
const express = require("express")
const app =express()
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.get("/test",(req,res)=>{
setTimeout(() => {
    res.send("ok")
}, 2000);
})
app.post("/test",(req,res)=>{
    setTimeout(() => {
        console.log(req.body)
        res.send("post-test")
    }, 2000);
})
app.get("/test2",(req,res)=>{
setTimeout(() => {
    console.log(req.query)
    // res.send({name:"ok"})
    res.send(req.query)
}, 2000);
})
app.post("/test2",(req,res)=>{
    setTimeout(() => {
        console.log(req.body)
        // res.send({name:"post ok"})
        res.send(req.body)
    }, 2000);
})
app.get("/test3",(req,res)=>{
setTimeout(() => {
    console.log(req.query)
    // res.send({name:"ok"})
    res.send(req.query)
}, 2000);
})
app.post("/test3",(req,res)=>{
    setTimeout(() => {
        console.log(req.body)
        // res.send({name:"post ok"})
        res.send(req.body)
    }, 2000);
})
app.post("/test1",(req,res)=>{
    const {username}=req.body
    let arr =["zs","ls","ww"]
    let result = arr.includes(username)
    res.send(result ? {result:"ok",massage:"用户名不可用"}:{result:"no",massage:"用户名可用"})
})
app.listen(5000,(err)=>{
    if(err) console.log("www no",err)
    else console.log("www ok")
})