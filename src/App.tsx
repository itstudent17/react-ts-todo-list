import React from "react";
import { TodoListItem } from "./components/TodoListItem";

const todos: Array<Todo> = [
  { text: "Walk the dog", isCompleted: true },
  { text: "Create app", isCompleted: false },
];

const App: React.FC = () => (
  <div>
    <>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </>
  </div>
);

export default App;
