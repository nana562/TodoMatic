import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [{ id: "todo-0", name: "Eat", completed: "false" }];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
