const express=require("express");
require("./db/config");
const test=require("./db/user")
const cors=require("cors");

const app=express();
app.use(cors());
  // {
  //        origin: ["https://fullstack-frontend-phi.vercel.app"],
  //   methods: ["POST", "GET"],
  //    credentials: true
  //   }
app.use(express.json());


app.get("/",(req,resp)=>
{    
    
     resp.json("hello");
})


app.post("/login",async(req,resp)=>
{
   
  
    let data=new test(req.body);
    let result=await data.save();
    // result=result.toObject();
    // delete result.password;
    resp.send(result);

})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
// app.listen(5000 , ()=>
// {
//     console.log("good");
// });
