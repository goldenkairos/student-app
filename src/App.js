import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import './App.css';
import Post from './components/Post';


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
  const tooglePresent = (id) => {
    const students = studentData.map((student) => {
      if (student.id === id) {
        student.present = !student.present;
        console.log("current status is",student.present)
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
        onUpdateStudent={tooglePresent}
      />
      </main>
      <Post />
    </div>
  );
}

export default App;
