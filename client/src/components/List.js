import React from "react";

export default function List(props) {
  return (
    <div className="studentsList">
      <h2>Current CodeOp Students</h2>
      <div>
        {props.students &&
          props.students.map(s => <p key={s.student}>{s.student}</p>)}
      </div>
    </div>
  );
}
