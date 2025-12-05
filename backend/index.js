import express from 'express'
import { collectionName, connection } from './dbconfig.js'
import cors from 'cors'
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

app.get('/', (req, res)=>{
    res.send({
        message: 'Basic API Done',
        success: true
    })
})

app.listen(3200, ()=>console.log("Server is running on port..."))