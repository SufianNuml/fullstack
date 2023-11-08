const express=require("express");
require("./db/config");
const test=require("./db/user")
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,resp)=>
{
    resp.json("hello");
})


app.post("/login",async(req,resp)=>
{
    let data=new test(req.body);
    let result=await data.save();
    result=result.toObject();
    delete result.password;
    resp.send(result);

})

app.listen(5000 , ()=>
{
    console.log("good");
});