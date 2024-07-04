import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleDelete = index => {
    dispatch(deleteTask(index));
  };

  const handleEdit = index => {
    setEditIndex(index);
    setNewTask(tasks[index]);
  };

  const handleSave = index => {
    dispatch(editTask(index, newTask));
    setEditIndex(null);
  };

  return (
    
    <ul className='Anji'>
  {tasks.map((task, index) => (
    <li key={index} style={{
      padding: '10px',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f9f9f9',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>
            <button
              onClick={() => handleSave(index)}
              style={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginRight: '10px'
            }}
          >
            {task}
          </span>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>
            <button
              onClick={() => handleEdit(index)}
              style={{
                backgroundColor: '#337ab7',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: '#d9534f',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  ))}
</ul>

  );
};

export default TaskList;