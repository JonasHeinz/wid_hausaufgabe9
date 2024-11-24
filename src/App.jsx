import { VegaLite } from "react-vega";
import spec from "./chart_spec.json";

function App() {
  return (
    <div>
      <h1>Vega-Lite Chart</h1>
      <VegaLite spec={spec} />
    </div>
  );
}

export default App;
