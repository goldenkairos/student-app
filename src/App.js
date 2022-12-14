import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import './App.css';
import Post from './components/Post';

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
    emailData: 'minh@incharge.org'
}
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Ada's Class</h1>
      <ClassInfo />
      </header>
      <main>
      <StudentList 
        studentData={studentData}
      />
      </main>
      <Post />
    </div>
  );
}

export default App;
