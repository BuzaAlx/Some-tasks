import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DndTable from "./pages/Dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DndTable />
      </div>
    </DndProvider>
  );
}

export default App;
