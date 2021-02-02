import React, { useState } from "react";
import { TodoListItem } from "./components/TodoListItem";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", isCompleted: true },
  { text: "Create app", isCompleted: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    // не [...todos]
    const newTodos = todos.map((todo) =>
      // почему сравниваются 2 объекта напрямую, а не id
      selectedTodo === todo ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
};

export default App;
