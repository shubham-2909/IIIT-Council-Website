const bodyParser = require('body-parser')
const express =require('express')
const port = process.env.PORT || 3000;
const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', async (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get('/minutes', async (req,res)=>{
    res.sendFile(__dirname + "/minutes.html")
})
app.get('/member_inst', async(req, res)=>{
    res.sendFile(__dirname + "/member_inst.html")
})
app.get('/admissons', async(req, res)=>{
    res.sendFile(__dirname + "/admissons.html")
})
app.get('/rules', async(req, res)=>{
    res.sendFile(__dirname + "/rules.html")
})
app.get('/acts', async(req, res)=>{
    res.sendFile(__dirname + "/acts.html")
})
app.get('/structure', async(req, res)=>{
    res.sendFile(__dirname + "/structure.html")
})
app.get('/students', async(req, res)=>{
    res.sendFile(__dirname + "/students.html")
})
app.get("/academics", async(req,res)=>{
    res.sendFile(__dirname + "/academics.html")
})
app.listen(port, async ()=>{
    console.log(`Server is Created on ${port}`);
})