import express from 'express'
import { collectionName, connection } from './dbconfig.js'
import cors from 'cors'
import { ObjectId } from 'mongodb'
const app =express()

app.use(express.json())
app.use(cors())

app.post('/add-task', async (req, res)=>{
    const db = await connection();
    const collection = await db.collection(collectionName)
    const result = await collection.insertOne(req.body)
    if(result){
        res.send({
            message: "new task added",
            success: true,
            result: result
        })
    } else{
        res.send({
            message: "task not added",
            success: false,
        })

    }
})

app.get('/tasks', async (req, res)=>{
    const db = await connection();
    const collection = await db.collection(collectionName)
    const result = await collection.find().toArray()
    if(result){
        res.send({
            message: "task list fetched",
            success: true,
            result: result
        })
    } else{
        res.send({
            message: "error try after some time",
            success: false,
        })

    }
})


app.get('/task/:id', async (req, res)=>{
    const db = await connection();
    const id = req.params.id
    const collection = await db.collection(collectionName)
    const result = await collection.findOne({_id: new ObjectId(id)})    
    if(result){
        res.send({
            message: "task fetched",
            success: true,
            result: result
        })
    } else{
        res.send({
            message: "error try after some time",
            success: false,
        })

    }
})

app.delete('/delete/:id', async (req, res)=>{
    const db = await connection();
    const id = req.params.id
    const collection = await db.collection(collectionName)
    const result = await collection.deleteOne({_id: new ObjectId(id)})
    if(result){
        res.send({
            message: "task deleted",
            success: true,
            result: result,
        })
    } else{
        res.send({
            message: "error try after some time",
            success: false,
        })

    }
})


app.delete('/delete-multiple/', async (req, res)=>{
    const db = await connection();
    const Ids = req.body
    const deleteTaskIds = Ids.map((item)=>new ObjectId(item))
    console.log(Ids)
    const collection = await db.collection(collectionName)
    const result = await collection.deleteMany({_id:{$in: deleteTaskIds}})
    if(result){
        res.send({
            message: "task deleted",
            success: result
        })
    } else{
        res.send({
            message: "error try after some time",
            success: false,
        })

    }
})


app.put('/update-task', async (req, res)=>{
    const db = await connection();
    const collection = await db.collection(collectionName)
    const {_id,...fields}=req.body
    const update = {$set: fields}
    console.log(fields)
    const result = await collection.updateOne({_id: new ObjectId(_id)}, update)
    if(result){
        res.send({
            message: "task updated",
            success: true,
            result: result
        })
    } else{
        res.send({
            message: "error try after some time",
            success: false,
        })

    }
})




app.listen(3200, ()=>console.log("Server is running on port..."))