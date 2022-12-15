import React from 'react';
import './StudentList.css';
import Student from './Student';
import PropTypes from 'prop-types';

// This is a component which is a function
const StudentList = ({ studentData }) => {
  const headerClass = 'student-list__header';
  const name = 'C18'
  const componentClass = 'student-list'

  const studentComponents = studentData.map((student) => {
    return (
      <li key={student.emailData}>
      <Student name={student.nameData} 
      email={student.emailData} 

      />
      </li>
    )

  });

StudentList.propTypes ={
  studentData: PropTypes.arrayOf(PropTypes.shape({
    nameData: PropTypes.string.isRequired,
    emailData: PropTypes.string.isRequired,
  })).isRequired,
};
  return ( 
  <section> 
  <h2 className={headerClass}> {name} Student List</h2>
      <ul className={componentClass}>
      {studentComponents}
      </ul>
  </section>);
}

export default StudentList;

