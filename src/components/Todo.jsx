import React from 'react'
import { useRef, useState, useEffect } from 'react'
import TodoItems from './TodoItems'

const Todo = ({ text }) => {
  const [tasks, setTasks] = useState([])
  const inputRef = useRef();

  // add task function
  const add = () => {

    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      alert("PLEASE ENTER THE TASK");
      return
    }

    const newTask = {
      id: Date.now(),
      text: inputText,
      isCompleted: false
    }

    setTasks((prev) => [...prev, newTask])

    inputRef.current.value = "";
  }

  // edit task function
  const editTask = (id) => {
    const updatedText = inputRef.current.value.trim()

    if (updatedText === "") {
      alert("Task cannot be empty")
      return
    }

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, text: updatedText }
          : task
      )
    )

    inputRef.current.value = ""
  }

  // delete task function
  const deleteTask = (id) => {
    return setTasks((prev) => prev.filter(task => task.id !== id))
  }

  // toggle task function

  const toggleTask = (id) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id == id) {
          return { ...task, isCompleted: !task.isCompleted }
        }

        return task;
      })
    })
  }

  useEffect(() => {

  }, [tasks])

  return (
    <div
    // className="bg-black justify-center "
    >

      <h1 className="text-white text-2xl font-bold">TODO LIST</h1>

      <input type="text" placeholder='add your task...' ref={inputRef}
        className="bg-gray-700 text-white border rounded-2xl h-10 w-100 items-start" />

      <button className="bg-blue-600 rounded-3xl h-10 w-20 text-white font-semibold"
        onClick={add}
      >Add</button>

      <div>



        {tasks.map((item) => (
          <TodoItems key={item.id} text={item.text} id={item.id}
            isCompleted={item.isCompleted} deleteTask={deleteTask}
            toggleTask={toggleTask} editTask={editTask}
          />
        ))}
      </div>
    </div>
  )


}

export default Todo