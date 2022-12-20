import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import './App.css';
import Post from './components/Post';
import NewStudentForm from './components/NewStudentForm';


function App() {
  const [studentData, setStudentData] = useState([
    {
        nameData: 'Ada',
        emailData: 'ada@dev.org',
        id:1,
        present:true
    },
    {
        nameData: 'Soo-ah',
        emailData: 'sooah@dev.org',
        id:2,
        present:true
    },
    {
        nameData: 'Chrissy',
        emailData: 'chrissy@dev.org',
        id:3,
        present:false
    },
    {
      nameData: 'Minh',
      emailData: 'minh@incharge.org',
      id:37,
        present:true
  }
  ]);
  const updateStudent = (studentToUpdate) => {
    const students = studentData.map((student) => {
      if (student.id === studentToUpdate.id) {
        return studentToUpdate;
        
      }
      return student;
    });

    setStudentData(students);
  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>Ada's Class</h1>
      <ClassInfo />
      </header>
      <main>
      <StudentList 
        studentData={studentData}
        onUpdateStudent={updateStudent}
      />
      
      </main>
      <Post />
      
      <NewStudentForm />
    </div>
  );
}

export default App;
