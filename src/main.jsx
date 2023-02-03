import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Pokemon from "./Pokemon";
import TodoApp from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <Pokemon /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
