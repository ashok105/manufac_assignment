import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import BarChart from "./Components/BarChart";

function App() {
  return (
    <div className="App">
      <div className="scatterPlot_container">
        <div className="scatterPlot">
          <ScatterPlot />
        </div>
      </div>
      <div className="barChart_container">
        <div className="barChart">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
