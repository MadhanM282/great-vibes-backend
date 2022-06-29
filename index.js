const express = require('express');
const connect = require('./src/config')
const app = express();
const movies = require('./src/controllers/controller')

const { register, login } = require("./src/controllers/auth.controller")

const adminController = require("./src/controllers/admin.controller")
app.use(express.json());
app.use("/movies",movies)

app.post("/register", register);

app.post("/login", login);

app.listen(process.env.PORT || 2999, async(req,res)=>{
    try{
        await connect()
        console.log("listening on port 2999")
    }
    catch(err){
        console.log('err', err.message);
    }
})