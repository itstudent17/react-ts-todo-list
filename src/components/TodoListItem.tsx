import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label
        // style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        className={todo.isCompleted ? "complete" : undefined}
      >
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
