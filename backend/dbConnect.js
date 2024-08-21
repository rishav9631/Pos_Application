const mongoose = require('mongoose')

const URL = 'mongodb+srv://rishavjha771:8qRIAVWwFDFzWlTq@cluster0.tzjm4zy.mongodb.net/shey-pos'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})