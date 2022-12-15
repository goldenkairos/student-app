import React from 'react';
import './Student.css';

const Student = ({ name, email }) => {
  
    return (
        <ul>
            <li>Nickname: { name }</li>
            <li>Email: { email }</li>
        </ul>
    )
}

export default Student;