import StudentList from './StudentList';
import React, {useState} from 'react'
import '../index.css'
// TODO 1: Add a resetAttendance function to mark all students as absent

function App() {
  const initialStudents = [
    { id: 1, name: 'Alice', present: false },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: false },
    { id: 4, name: 'Diana', present: false }
  ];
  
  const [students, setStudents] = useState(initialStudents);
  
    const toggleAttendance = (id) => {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === id ? { ...student, present: !student.present } : student
        )
      );
    };
  
    const resetAttendance = () => {
      setStudents((prev) =>
        prev.map((student) => ({ ...student, present: false }))
      );
    };
  
    const presentCount = students.filter((s) => s.present).length;
    const absentCount = students.length - presentCount;
  
    return (
      <div className="app">
        <h1>Attendance Tracker</h1>
        <button onClick={resetAttendance}>Reset Attendance</button>
        <p>
          Present: {presentCount} | Absent: {absentCount}
        </p>
        <StudentList students={students} onToggle={toggleAttendance} />
      </div>
    );
  }

export default App;