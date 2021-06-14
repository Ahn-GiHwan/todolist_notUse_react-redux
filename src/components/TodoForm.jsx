import { useRef } from "react";
import useReduxDispatch from "../Hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  return (
    <div>
      <input type="text" ref={inputRef} onKeyPress={enter} />
      <button onClick={click}>ADD</button>
    </div>
  );
  function click() {
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  }
  function enter(e) {
    if (e.key === "Enter") {
      click();
    }
  }
}
