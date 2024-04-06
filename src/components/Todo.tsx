import { useTodos } from "../hooks/useTodos";
import { TodoType } from "../types";
import { Aggregation } from "./Aggregation";
import { SearchBox } from "./SearchInput";
import "./Todo.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    addTodo,
    deleteTodo,
    toggleTodo,
    switchCategory,
    searchTodos,
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h1 className="todo-title">🌸 Proficiency Todo</h1>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
      <SearchBox performSearch={searchTodos} />
    </div>
  );
};

export { Todo };
