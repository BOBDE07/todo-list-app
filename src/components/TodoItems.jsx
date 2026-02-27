import React from 'react'

const TodoItems = ({ text , id , isCompleted , deleteTask , toggleTask , editTask }) => {
    return (
        <div className='items-center gap-2 '>
            <div>
                <p className={`text-white ${isCompleted ? 'line-through' : ''}`}>{text}</p>
            </div>

            <div>
                <button className='text-white shadow-md bg-red-600 rounded-md px-2 py-1'
                onClick={() => deleteTask(id)}
                >Delete</button>
                
                <button className='text-white shadow-md bg-green-600 rounded-md px-2 py-1 ml-2'
                onClick={() => toggleTask(id)}
                >{isCompleted ? 'Undo' : 'Complete'}</button>

                <button className='text-white shadow-md bg-yellow-600 rounded-md px-2 py-1 ml-2'
                onClick={() => editTask(id)}

                >Edit</button>
            </div>

        </div>
    )
}

export default TodoItems