import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import ReduxContext from "./contexts/ReduxContext";
// import { addTodo, completeTodo, showAll, showComplete } from "./redux/actions";

// store.subscribe(() => {
//   console.log(store.getState());
// });

// // console.log(store);
// store.dispatch(addTodo("todo"));
// store.dispatch(completeTodo(0));

// store.dispatch(showComplete());
// store.dispatch(showAll());

ReactDOM.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
