import { useState } from "react";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [allTodos, setAllTodos] = useState([
    "this is a new task",
    "hello there meeting at 9",
    "class from 9-11",
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const handleTodo = () => {
    if (todoValue.trim() !== "") {
      if (editIndex !== null) {
        const updateTodos = [...allTodos];
        updateTodos[editIndex] = todoValue;
        setAllTodos(updateTodos);
        setEditIndex(null);
        setTodoValue("");
      } else {
        setAllTodos([...allTodos, todoValue]);
        setTodoValue("");
      }
    }
  };
  const handleRemove = (idx) => {
    setAllTodos((prevTodos) =>
      prevTodos.filter((value, index) => {
        return index !== idx;
      })
    );
    setAllTodos(arr);
  };
  const handleEdit = (idx) => {
    setTodoValue(allTodos.find((ele, index) => index === idx));
    setEditIndex(idx);
  };
  return (
    <>
      <h1>TODO app</h1>
      <div>
        <input
          value={todoValue}
          placeholder="enter task"
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          style={{ fontSize: "16px", padding: "0.5rem" }}
        />
        <button onClick={handleTodo} style={{ padding: "0.5rem", margin: "1rem", width: "60px" }}>
          add
        </button>
      </div>
      <ul>
        {allTodos?.map((todo, index) => {
          return (
            <li key={index} style={{ margin: "1rem" }}>
              {todo}
              <button
                style={{ margin: "1rem", cursor: "pointer" }}
                onClick={() => handleEdit(index)}>
                edit
              </button>
              <button onClick={() => handleRemove(index)}>remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
