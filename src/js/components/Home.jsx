import { useState } from "react";
// import React { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="container">
      <h1>Lista</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="¿Qué tengo que hacer?"
          />
        </li>
        {todos.map((item, index) => (
          <li
            key={index}
            className={hoverIndex === index ? "todo-item hover" : "todo-item"}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item}{" "}
            {hoverIndex === index && (
              <i
                className="bi bi-x"
                style={{ cursor: "pointer", color: "black" }}
                onClick={() =>
                  setTodos(
                    todos.filter((t, currentIndex) => index != currentIndex)
                  )
                }
              ></i>
            )}
          </li>
        ))}
      </ul>
      <div>{todos.length} Tareas pendientes</div>
    </div>
  );
};

export default Home;
