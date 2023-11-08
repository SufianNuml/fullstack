const express=require("express");
require("./db/config");
const test=require("./db/user")
const cors=require("cors");

const app=express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://fullstack-frontend-phi.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(cors(
    {
         origin: ["https://fullstack-frontend-phi.vercel.app"],
    methods: ["POST", "GET"],
     credentials: true
    }
));
app.get("/",(req,resp)=>
{    
     resp.header("Access-Control-Allow-Origin", "*");
     resp.json("hello");
})


app.post("/login",async(req,resp)=>
{
    resp.header("Access-Control-Allow-Origin", "*"); 
  
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
