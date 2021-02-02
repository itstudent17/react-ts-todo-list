type Todo = {
  text: string;
  isCompleted: boolean;
};

type ToggleTodo = (selectedItem: Todo) => void;
