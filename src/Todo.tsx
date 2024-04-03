import { Aggregation } from "./Aggregation";
import "./Todo.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoType } from "./types";
import { useTodos } from "./useTodos";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    addTodo,
    deleteTodo,
    toggleTodo,
    switchCategory,
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
