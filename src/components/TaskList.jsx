import React, { useRef } from "react";
import useList from "../hooks/useList";
import "../styles/taskList.css";

const TaskList = () => {
  const listTask = useList();
  const taskText = useRef("");
  const formRef = useRef();
  
  const hadlerAddTask = (e) => {
    e.preventDefault();
    listTask.push(taskText.current.value);
    formRef.current.reset();
  };

  return (
    <div className="taskListDiv">
      <h1>Task List</h1>
      <form ref={formRef}>
        <input type="text" ref={taskText} />
        <button onClick={hadlerAddTask}>Add</button>
      </form>

      <div>
        <button onClick={() => listTask.clear()}>Clear List</button>
        <button onClick={() => listTask.orderAsc()}>Order Asc</button>
        <button onClick={() => listTask.orderDesc()}>Order Desc</button>
      </div>

      {listTask.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <ul>
          {listTask.value.map((task, index) => (
            <li key={index}>
              {task}
              <input
                type="checkbox"
                onClick={() => listTask.remove(index)}
                checked={false}
                style={{ margin: "4px" }}
                readOnly
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
