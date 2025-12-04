import React from 'react'
import '../style/addtask.css'
const AddTask = () => {
  return (
    <div className='container'>
      <h1>Add New Task</h1>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" name="title" placeholder='Enter Task Title' />
        <label htmlFor="">Description</label>
        <textarea rows={4} name="description" placeholder='Enter Task Description'></textarea>
        <button className='submit'>Add New Task</button>
      </form>
    </div>
  )
}

export default AddTask
