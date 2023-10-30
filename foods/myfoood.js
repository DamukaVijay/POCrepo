const express = require("express");
const app = express();
app.get('/',(req,resp)=>{
 resp.send ("welcome to Node micro service");
})
app.listen(port,()=>{
  console.log(" service up and running");
})
