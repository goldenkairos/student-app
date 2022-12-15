
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';


function App() {
  const studentList = <StudentList />
  return (
    <div className="App">
    <header className="App-header">
      <h1>Ada's class</h1>
      <ClassInfo />
    </header>
      <StudentList />
    </div>
  );
}

export default App;
