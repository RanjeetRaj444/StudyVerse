const express = require('express')
const BookModel = require('../model/books.model')

const userBooksRouter = express.Router();

userBooksRouter.get('/book', async(req, res)=>{
   
    const {value} = req.query;
    console.log(value);
    const data = await BookModel.find({category: value})
    res.send(data)
})

userBooksRouter.get('/singleBook/:id', async(req, res)=>{
    // console.log(req.query);
    const {id} = req.params;
    console.log(id);
    const _id = id;
    const data = await BookModel.findOne({_id})
    console.log(data);
    res.send(data)
})



module.exports = {
    userBooksRouter
}