const bodyParser = require('body-parser')
const express =require('express')
const port = process.env.PORT || 3000;
const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', async (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.listen(port, async ()=>{
    console.log(`Server is Created on ${port}`);
})