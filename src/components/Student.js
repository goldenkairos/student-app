import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import './Student.css';

const Student = ({name,email, id, isPresent, onUpdateStudent}) => {
  // console.log(name,email)  //these from StudentList.js

  // const [ isPresent, setIsPresent] = useState(false);

  if (isPresent){
    console.log(`${name} is present`);
  } else {console.log(`${name} is not present`)};

  const updateAttendance = () => {
    onUpdateStudent({
      id,
      emailData:email,
      nameData:name,
      present:!isPresent});

    console.log(`Updating Attendance for ${name}`)
  
  }

  const nameColor = isPresent ? 'green' : 'red';

  return (
    <div>
        <ul>
            <li className={nameColor}>Nickname: { name }</li>
            <li>Email: {email}</li>
        </ul>
        <button onClick={updateAttendance}>
        Toogle if {name} is present
        </button>
    </div>
    )
};

Student.propTypes ={
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onUpdateStudent: PropTypes.func.isRequired
}

export default Student;

