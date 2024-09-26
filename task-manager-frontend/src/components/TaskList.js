import React from 'react';
import axios from 'axios';
import './TaskList.css';


const TaskList = ({ tasks, setTasks }) => {
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id)); // Update the state after deletion
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title} - {task.priority} 
                        <button onClick={() => deleteTask(task._id)}>Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
