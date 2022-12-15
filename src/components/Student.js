import React from 'react';
import './Student.css';

const Student = (props) => {
  console.log(props);
    return (
        <ul>
            <li>Nickname: { props.name }</li>
            <li>Email: { props.email }</li>
        </ul>
    )
}

export default Student;