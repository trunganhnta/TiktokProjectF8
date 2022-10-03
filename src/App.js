import { useReducer } from "react";
import "./App.css";
import Button from "~/components/Button";

const initial = 0;

// action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION: {
      return state + 1;
    }
    case DOWN_ACTION:
      return state - 1;
    default:
      console.log("error");
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <Button />
    </div>
  );
}

export default App;
