import express from 'express'
const app =express()

app.get('/', (req, res)=>{
    res.send({
        message: 'Basic API Done',
        success: true
    })
})

app.listen(3200, ()=>console.log("Server is running on port..."))