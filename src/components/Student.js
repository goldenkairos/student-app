import React from 'react';
import PropTypes from 'prop-types';

const Student = ({name,email}) => {
  // console.log(name,email)  //these from StudentList.js
  return (
        <ul>
            <li>Nickname: { name }</li>
            <li>Email: {email}</li>
        </ul>
    )
};

Student.propTypes ={
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
}

export default Student;