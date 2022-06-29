const express = require('express');
const rout = express.Router();
const Movies = require('../modules/model')
const middleware = require("../middlewares/authenticate")
rout.get('/',async(req, res)=>{
    try{
        const movies = await Movies.find().lean().exec();
        return res.status(200).send(movies)
    }
    catch(err){
        return res.send(err.message)
    }
})

rout.post('/',async(req, res)=>{
    try{
        const movies = await Movies.create(req.body)
        return res.status(200).send(movies)
    }
    catch(err){
        return res.send(err.message)
    }
})

rout.patch('/:_id',middleware,async(req, res)=>{
    try{
        const movies = await Movies.findByIdAndUpdate(req.params._id, req.body,{new:true})
        return res.status(200).send(movies)
    }
    catch(err){
        return res.send(err.message)
    }
})

rout.delete("/:id",middleware,async(req, res)=>{
    try{
        const movies = await Movies.findByIdAndDelete(req.params._id)
        return res.status(200).send(movies)
    }
    catch(err){
        return res.send(err.message)
    }
})
module.exports = rout
