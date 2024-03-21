const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

const DB = 'mongodb://localhost:27017'


const app = express()


app.use(express.json())
app.use(cors())


const UserDetail = require('./model/UserDetail')

// creating user 

app.post("/create_user", async(req,res)=>{
    const userDetail=new UserDetail(req.body)
    try{
        await userDetail.save()
        res.status(201).json({
            status:"Sucess",
            message:"User created"
        })
    }
    catch(err){
        res.status(500).json({
            status:"Failed",
            message: err
        })

    }
})

// getting user datails 
app.get('/get_user',async(req,res)=>{
    const userDetails = await UserDetail.find({})
    try{
        res.status(200).json({
            status:"Sucess",
            data:{
                userDetails
            }
        })
    }
    catch(err){
        res.status(500).json({
            status:"Failed",
            message:err
        })
    }
})


//update user details
app.patch('/update_user/:id', async(req,res)=>{
    const UpdatedUser = await UserDetail.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators: true
    })
    try{
        res.status(200).json({
            status:"Success",
            data : {
                UpdatedUser
            }
        })
    }
    catch(err){
        console.log(err)
    }
})

//delete user details
app.delete('/delete_user/:id',async(req,res)=>{
    await UserDetail.findByIdAndDelete(req.params.id)

    try{
        res.status(204).json({
            status:"Success",
            data : {},
            message:"deleted user"
        })

    }
    catch(err){
        res.status(500).json({
            status:"failed",
            message: err
        })
    }
})


mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})


const PORT = 8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})