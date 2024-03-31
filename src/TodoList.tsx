import { TodoType } from "./types";

export const TodoList = ({ todos }: { todos: TodoType[]; }) => {
  return (
    <>
      {todos.map((todo: TodoType) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </>
  );
};
