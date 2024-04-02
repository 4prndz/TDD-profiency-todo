import "./Todo.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoType } from "./types";
import { useTodos } from "./useTodos";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    setCategory,
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <div className="aggregation">
        <button data-testid="todo-total" onClick={() => setCategory("total")}>
          total
        </button>
        <button
          data-testid="todo-completed"
          onClick={() => setCategory("completed")}
        >
          completed
        </button>
        <button data-testid="todo-active" onClick={() => setCategory("active")}>
          active
        </button>
      </div>
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
