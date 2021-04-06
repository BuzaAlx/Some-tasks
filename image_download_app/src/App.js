import React, { useState, createContext } from "react";
import "./App.css";
import TreePage from "./pages/TreePage";
import "bootstrap/dist/css/bootstrap.min.css";
import FileDownloader from "./pages/FileDownloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder, faFileImage } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";

library.add(faFolder, faFileImage);

export const Context = createContext();

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Context.Provider value={{ selectedImg, setSelectedImg }}>
      <div className="App">
        <Header />
        <div className="container text-center ">
          <div className="row px-5">
            <div className="col-md-4">
              <TreePage />
            </div>
            <div className="col-md-8">
              <FileDownloader />
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
