import React, { useEffect, useState } from "react";
import "./App.css";
//import form component
import Form from "./components/Form";
//import list component
import List from "./components/List";

export default function App() {
  //hooksfor collection of student (firstname, lastname)
  let [students, setStudents] = useState([]);

  //hook executes before render, pulls existing records from DB and allows
  // data to be displayed
  useEffect(() => {
    //use fetch to request URL
    fetch("/api/facebook") // connects to server/ students.js
      //send requestand convert JSON
      .then(response => response.json())
      //returns data array of students
      .then(students => {
        //check
        console.log("parent", students);
        //set students
        setStudents(students);
      }) //catch errors
      .catch(err => {
        //if error caugh show err msg
        console.log("ERROR", err.message);
      });
    // getStudents();
  }, []); //gets saved in a new array

  // pass student as arg
  function getStudents(student) {
    //Define new student and set it as the student
    let newStudent = { student: student };

    //req method default is always GET, need to explicit indicate method
    let options = {
      method: "POST", // we are getting students by adding them
      headers: {
        "Content-Type": "application/json" //Description of file type is a JSON format
      },

      //elements into JSON elements from the data entered in the body
      body: JSON.stringify(newStudent)
    };

    //2nd fetch  for response, looks for student with matching id
    fetch("/facebook", options)
      //promise with fetch and converts json
      .then(response => response.json())
      //returns data array
      .then(students => {
        //check
        console.log(students);
        //updates data to array
        setStudents(students);
      })
      //catches any errors
      .catch(err => {
        // upon failure, show error message
        // console.log("ERROR:", err.message);
      });
  }

  return (
    <div className="App">
      <Form onSubmit={newStudent => getStudents(newStudent)} />

      <List students={students} />
    </div>
  );
}
