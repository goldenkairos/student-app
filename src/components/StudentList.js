import React from 'react';
import './StudentList.css';
import Student from './Student';
import PropTypes from 'prop-types';

// This is a component which is a function
const StudentList = ({ studentData, onUpdateStudent }) => {
  const headerClass = 'student-list__header';
  const name = 'C18'
  const componentClass = 'student-list'
  
  const studentComponents = studentData.map((student) => {
    return (
      <li key={student.id}>
      <Student name={student.nameData} 
      email={student.emailData}
      id={student.id}
      isPresent={student.present}
      onUpdateStudent={onUpdateStudent}
      />
      </li>
    )

  });

  return ( 
    <section> 
    <h2 className={headerClass}> {name} Student List</h2>
        <ul className={componentClass}>
        {studentComponents}
        </ul>
    </section>);
};

StudentList.propTypes ={
  studentData: PropTypes.arrayOf(PropTypes.shape({
    nameData: PropTypes.string.isRequired,
    emailData: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    present: PropTypes.bool.isRequired,
    onUpdateStudent: PropTypes.func.isRequired,
  })).isRequired,
};



export default StudentList;

