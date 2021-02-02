import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label
        // style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        className={todo.isCompleted ? "complete" : undefined}
      >
        <input type="checkbox" checked={todo.isCompleted} />
        {todo.text}
      </label>
    </li>
  );
};
