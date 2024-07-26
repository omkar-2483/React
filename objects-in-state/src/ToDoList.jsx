import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [tasks, setTasks] = useState([
    { id: uuidv4(), todo: "sample task", isDone: false },
  ]); //tasks is now array of object, each object has id and todo
  //another state variable to track input
  let [newtask, setNewTask] = useState("");

  let addNewTask = () => {
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuidv4(), todo: newtask, isDone: false }];
    });
    setNewTask("");
  };

  let updateTaskValue = (event) => {
    // console.log(event.target);
    setNewTask(event.target.value);
  };

  //delete function
  let deleteToDo = (id) => {
    // alert(`delete ${tasks.todo}`);
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id != id);
    });
  };

  let markDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id == id) {
          return {
            ...task,
            isDone: true,
          };
        } else {
          return task;
        }
      })
    );
  };

  let markAllDone = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        return {
          ...task,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <input
        value={newtask}
        onChange={updateTaskValue}
        placeholder="Add a Task"
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />

      <h3>Tasks To Do</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.isDone ? (
              <span style={{ textDecorationLine: "line-through" }}>
                {task.todo}
              </span>
            ) : (
              <span>{task.todo}</span>
            )}
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                deleteToDo(task.id);
              }}
            >
              Delete
            </button>{" "}
            &nbsp;
            <button onClick={() => {markDone(task.id);}}>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
}
