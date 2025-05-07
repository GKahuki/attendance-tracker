import React from 'react';
import Student from './Student';

{/* TODO 4: Map through students and render Student components */}
// StudentLists receives an array of students objects and a callback onToggle
function StudentList({ students, onToggle }) {
  function displayStudent(student) {
    return (
      <Student
        key={student.id} 
        student={student}
        onToggle={onToggle}
      />
    );
  }
  // loop over the array of students and for each call the displayStudent function to render a jsx element
  return (
    <div>
      {students.map(displayStudent)}
    </div>
  );
}

export default StudentList;