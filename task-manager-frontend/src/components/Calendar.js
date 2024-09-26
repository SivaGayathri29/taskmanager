import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';


const TaskCalendar = ({ tasks }) => {
    const events = tasks.map(task => ({
        id: task._id,
        title: task.title,
        start: task.dueDate,
        allDay: true, // Adjust as needed
        extendedProps: { priority: task.priority }
    }));

    const handleEventClick = (info) => {
        console.log('Task completed:', info.event.id);
        // Add deletion logic here if needed
    };

    return (
        <div style={{ width: '100%', marginTop: '20px' }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventClick={handleEventClick}
                editable={true}
                selectable={true}
            />
        </div>
    );
};

export default TaskCalendar;
