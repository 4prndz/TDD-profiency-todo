export const Category = ({
  label,
  number,
  type,
  switchCategory,
}: {
  label: string;
  number: number;
  type: string;
  switchCategory: (type: string) => void;
}) => {
  return (
    <div>
      <label>
        <button
          data-testid={`todo-${type}`}
          onClick={() => switchCategory(type)}
          className={`aggregation-button-${type}`}
        >
          <span className="aggregation-label">{label}</span>
          <span className="aggregation-number">{number}</span>
        </button>
      </label>
    </div>
  );
};
