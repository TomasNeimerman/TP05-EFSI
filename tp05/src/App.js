import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";

function App() {
  return (
    <div>
      <UsersList />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
export default App;