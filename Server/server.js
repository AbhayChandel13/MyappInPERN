const express =require("express");
const cors = require("cors");
const studentRoutes = require('./src/student/routes');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
   res.send("hello world");
})

app.use('/api/v1/students',studentRoutes)
 
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})