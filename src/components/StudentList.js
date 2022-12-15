import React from 'react';
import './StudentList.css';
import Student from './Student';


///moving studentData to App and pass to studentList as prop
// const studentData = [
//   {
//       nameData: 'Ada',
//       emailData: 'ada@dev.org'
//   },
//   {
//       nameData: 'Soo-ah',
//       emailData: 'sooah@dev.org'
//   },
//   {
//       nameData: 'Chrissy',
//       emailData: 'chrissy@dev.org'
//   },
//   {
//     nameData: 'Minh',
//     emailData: 'minh@dev.org'
// },
// ]


const StudentList = ( { studentData }) => {
  const componentClass ='student-list'

  //(student) can be anything, here it's individual student
  const studentComponents = studentData.map((student) =>{
    return (
      <li key={student.emailData}>
        <Student 
        name={ student.nameData } 
        email={student.emailData} />
      </li>
    );
  });

  return (
    <section>
      <h2>Student List</h2>
      <ul className={componentClass}>
        {studentComponents }

      </ul>
    </section>
  );
};

export default StudentList;