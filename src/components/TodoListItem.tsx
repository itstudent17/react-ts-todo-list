interface TodoListItemProps {
  todo: {
    text: string;
    isCompleted: boolean;
  };
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label htmlFor="">
        <input type="checkbox" checked={todo.isCompleted} />
        {todo.text}
      </label>
    </li>
  );
};
