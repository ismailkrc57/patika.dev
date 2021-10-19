import React from "react";
import "../style/style.css";
import { useState } from "react";

function TodoMainPage() {
  const [mainTodoList, setmainTodoList] = useState([
    { text: "learn react", completed: false },
  ]);
  const [todoList, settodoList] = useState(mainTodoList);

  const [todoText, settodoText] = useState("");
  function handleChangeCheckbox(e, key) {
    todoList[key].completed = !todoList[key].completed;
    settodoList([...todoList]);
    console.log(e);
    console.log(key);
  }
  function handleAll() {
    settodoList([...mainTodoList]);
  }
  function handleActive() {
    let tmpList = mainTodoList.filter((t) => !t.completed);
    settodoList([...tmpList]);
  }
  function handleCompleted() {
    let tmpList = mainTodoList.filter((t) => t.completed);
    settodoList([...tmpList]);
  }
  function clearCompleted() {
    let tmpList = mainTodoList.filter((t) => !t.completed);
    setmainTodoList([...tmpList]);
    settodoList([...mainTodoList]);
  }
  function destroy(key) {
    mainTodoList.splice(key, 1);
    setmainTodoList([...mainTodoList]);
    settodoList([...mainTodoList]);
  }

  return (
    <div>
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <form
              onSubmit={(e) => {
                settodoText(e.target.value);
                setmainTodoList([
                  { text: todoText, completed: false },
                  ...todoList,
                ]);
                settodoList([
                  { text: todoText, completed: false },
                  ...todoList,
                ]);
                settodoText("");
                e.preventDefault();
              }}
            >
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autofocus
                onChange={(e) => {
                  settodoText(e.target.value);
                }}
                value={todoText}
              />
            </form>
          </header>
          {/* This section should be hidden by default and shown when there are todos */}
          <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {todoList.map((t, key) => (
                <li key={key} className={t.completed ? "completed" : ""}>
                  <div className="view">
                    <div
                      onClick={(e) => {
                        handleChangeCheckbox(e, key);
                      }}
                    >
                      <input
                        className="toggle"
                        type="checkbox"
                        onChange={(e) => {
                          handleChangeCheckbox(e, key);
                        }}
                        checked={t.completed}
                      />
                      <label>{t.text}</label>
                    </div>

                    <button className="destroy" onClick={() => destroy(key)} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {/* This footer should hidden by default and shown when there are todos */}
          <footer className="footer">
            {/* This should be `0 items left` by default */}
            <span className="todo-count">
              <strong>{todoList.filter((t) => !t.completed).length} </strong>
              items left
            </span>
            <ul className="filters">
              <li>
                <a onClick={() => handleAll()} className="selected">
                  All
                </a>
              </li>
              <li>
                <a onClick={() => handleActive()}>Active</a>
              </li>
              <li>
                <a onClick={() => handleCompleted()}>Completed</a>
              </li>
            </ul>
            {/* Hidden if no completed items are left ↓ */}
            <button
              className="clear-completed"
              onClick={() => clearCompleted()}
            >
              Clear completed
            </button>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default TodoMainPage;
