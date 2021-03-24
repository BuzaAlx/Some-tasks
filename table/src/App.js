import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "./components/Input";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <InputField />
        <Table />
      </div>
    </div>
  );
}

export default App;
