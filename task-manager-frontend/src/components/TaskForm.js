import React, { useState } from 'react';
import axios from 'axios';
import './TaskForm.css';


const TaskForm = ({ setTasks }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('low');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, priority, dueDate };
        await axios.post('http://localhost:5000/api/tasks', newTask);
        setTasks(prevTasks => [...prevTasks, newTask]); // Update state with the new task
        setTitle('');
        setPriority('low');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task Title" required />
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
