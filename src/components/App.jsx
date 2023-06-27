import React, { useState } from "react";

let tasksArr = ["task 1", "task 2"];

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(tasksArr);
  function handleTask(event) {
    const { value } = event.target;
    setTask(value);
  }

  function addTask(event) {
    if (task === "" || task === null) return;
    setTasks([...tasks, task]);
    // tasksArr.push(task);//if want to update original data
    setTask("");
  }
  let i = 0;

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleTask} type="text" value={task} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {tasks.map((item) => (
            <li key={i++}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
