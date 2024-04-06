import { FaTrashAlt } from "react-icons/fa";
import { TodoType } from "../types";

export const TodoList = ({
  todos,
  onToggleItem,
  onDeleteItem,
}: {
  todos: TodoType[];
  onToggleItem: (todo: TodoType) => void;
  onDeleteItem: (todo: TodoType) => void;
}) => {
  return (
    <>
      {todos.map((todo: TodoType) => (
        <div className="todo-item" key={todo.id}>
          <span
            data-completed={todo.completed}
            onClick={() => onToggleItem(todo)}
            data-testid="todo-item"
          >
            {todo.content}
          </span>
          <button
            data-testid="delete-button"
            className="delete-buttom"
            onClick={() => onDeleteItem(todo)}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </>
  );
};
