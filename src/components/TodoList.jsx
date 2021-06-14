import useReduxState from "../Hooks/useReduxState";

export default function TodoList() {
  const state = useReduxState();

  return (
    <div>
      <ul>
        {state.todos.map((todo, idx) => {
          return <li key={idx}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}
