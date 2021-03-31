import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Table from "./components/Table";
import NewTable from "./components/NewTable";

function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <NewTable />
      </div>
    </div>
  );
}

export default App;
