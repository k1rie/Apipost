import {Schema} from "mongoose";
import mongoose from "mongoose";

const uri = "mongodb+srv://admin:c9PouPk7KO5VBp3I@cluster0.urhskro.mongodb.net/?retryWrites=true&w=majority"
const Post = new Schema({
    tittle: String,
    content: String,
})

const model = mongoose.model("posts",Post)
function connect() {
    mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
}

async function getAllPosts(){
try{
    const data = await model.find({})
    return data
}catch (e) {
console.log(e)
}
}

async function createPost(tittle,content){
    try {
        const newpost = new model({
            tittle: tittle,
            content: content,
        })
        newpost.save()
    }catch (e) {
        console.log(e)
    }
}

async function findpost(tittle){
    try {
        const data = await model.find({tittle:tittle})
        return data
    }catch (e) {
        console.log(e)
    }
}


export {connect,getAllPosts,createPost,findpost}