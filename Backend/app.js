const express=require('express')
const app=express()

const mongoose=require('mongoose')
const cors=require('cors')

const User=require('./model/users')  //another file
const users = require('./model/users')


//middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//connect to database
//after '/'if any name given it will create database with that name


const db_url='mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
    console.log('connection established');
})

//login
app.post('/login',(req,res)=>{
    users.findOne({email:req.body.username}).then((userData)=>{
        if (userData) {
                if(req.body.password === userData.password){
                    res.send({message:'login successful',status:200})
                }else{
                    res.send({message:"please enter your valid password"})
                }
        }else{
            res.send({message:"user not found"})
        }
    })
})

//signup
app.post('/register',async(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if(userData){
            //error msg
            res.send({message:'User already exists'})
        }else{
            //add the data
           let userData= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password
           })
           userData.save().then(()=>{
            res.send({message:'user registred succesfully'})
           }).catch(()=>{
            res.send({message:"user registration failed try after sometime"})
           })
        }
    })
})

app.listen(4000,()=>{
    console.log('server running at port 4000')
})