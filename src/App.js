import Effect from "./components/UseEffect";
import Reducer from "./components/UseReducer";
import Ref from "./components/UseRef";
import UseState from "./components/UseState";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UseState />
      <Reducer />
      <Effect />
      <Ref />
    </div>
  );
}
