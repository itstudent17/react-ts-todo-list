import React, { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
// import { TodoListItem } from "./components/TodoListItem";

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

  const addTodo: AddTodo = (newTodo) =>
    newTodo.trim() !== "" &&
    setTodos([...todos, { text: newTodo, isCompleted: false }]);

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* {todos.map((todo: Todo) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} />
      ))} */}
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
