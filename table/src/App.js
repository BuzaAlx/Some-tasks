import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table_1/Table";
import NewTable from "./components/NewTable";

function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <NewTable />
        <Table />
      </div>
    </div>
  );
}

export default App;
