import React from 'react';  //needed to create and use React components

function Student({ student, onToggle }) {
  // TODO 5: Add an onClick to the button to trigger onToggle with student id

  return (
    <div>
      <span>{student.name}</span>
      <button onClick= {() => onToggle(student.id)}>
        {student.present ? 'Mark Absent' : 'Mark Present'}
      </button>
    </div>
  );
}

export default Student;

//This component is responsible for displaying information about a single student and providing a button to toggle their attendance status.

