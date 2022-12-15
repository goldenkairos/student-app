
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

const studentData = [
  {
      nameData: 'Ada',
      emailData: 'ada@dev.org'
  },
  {
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org'
  },
  {
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org'
  },
  {
    nameData: 'Minh',
    emailData: 'minh@dev.org'
},
]


function App() {
  const studentList = <StudentList />
  return (
    <div className="App">
    <header className="App-header">
      <h1>Ada's class</h1>
      <ClassInfo />
    </header>
      <StudentList 
        studentData={studentData}
      />
    </div>
  );
}

export default App;
