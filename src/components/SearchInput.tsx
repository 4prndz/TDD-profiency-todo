import { ChangeEvent } from "react";
import { useCommandAndKey } from "../hooks/useCommandAndKey";

export const SearchBox = ({
  performSearch,
}: {
  performSearch: (query: string) => void;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  const { inputRef } = useCommandAndKey("s");

  return (
    <input
      ref={inputRef}
      type="text"
      className="todo-input"
      data-testid="search-input"
      onChange={handleChange}
      placeholder="Type to search"
    />
  );
};
