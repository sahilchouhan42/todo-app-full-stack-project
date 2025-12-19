import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/addtask.css'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateTask = () => {
  const apiUrl = import.meta.env.VITE_API_URL
  const [taskData, setTaskData] = useState({})
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    getTask(id)
  },[])

  const getTask = async (id)=>{
    let task = await fetch(`${apiUrl}/task/${id}`)
    task = await task.json()
    if(task.result){
        setTaskData(task.result )
    }
  }

  const updateTask = async ()=>{
    console.log('funtion called', taskData)
    let task = await fetch(`${apiUrl}/update-task`, {
      method: "put",
      body: JSON.stringify(taskData),
      headers:{
        'Content-Type': 'Application/Json'
      }
    })
    task = await task.json()
    if(task){
      navigate('/')
    }
  }

  return (
    <div className='container'>
      <h1>Update Task</h1>
      
        <label htmlFor="">Title</label>
        <input value={taskData?.title} onChange={(event)=>setTaskData({...taskData, title:event.target.value})} type="text" name="title" placeholder='Enter Task Title' />
        <label htmlFor="">Description</label>
        <textarea value={taskData?.description} onChange={(event)=>setTaskData({...taskData, description:event.target.value})} rows={4} name="description" placeholder='Enter Task Description'></textarea>
        <button onClick={updateTask} className='submit'>Update Task</button>
     
    </div>
  )
}

export default UpdateTask
