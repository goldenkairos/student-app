import React from 'react';
import './StudentList.css';
import Student from './Student';

const StudentList = () => {
  const componentClass ='student-list'
  const headerClass ='student-list__header'
  return (
    <section>
      <h2 className={headerClass}>Student List</h2>
      <ul className={componentClass}>
        <li><Student name="Ada Lovelace" email="ada@dev.org" /></li>
        <li><Student name="Becca" email="becca@dev.org"/></li>

      </ul>
    </section>
  );
};

export default StudentList;