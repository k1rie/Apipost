import express from "express"
import cors from "cors"
import {connect,getAllPosts,createPost,findpost} from "./mongoconfig/mongoconfig.js";

const App = express()

App.use(express.json())
App.use(cors())


App.get("/pp",(req,res)=>{
    res.send("holaaa")
})
App.get("/getposts",async (req,res)=>{

    await connect()
    const data = await getAllPosts()
    console.log("conectado")
    console.log(data)
    res.send(data)
})

App.get("/findpost/:tittle",async (req,res)=>{
await connect()
   const data = await findpost(req.params.tittle)
    console.log(req.params.tittle)
    res.send(data)
})

App.post("/createpost",async(req,res)=>{
    await connect()
    await createPost(req.body.tittle,req.body.content)
    res.send("enviado")
})

App.listen(3001,()=>{
    console.log("ready")
})