import "./App.scss";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
import { CounterProvider } from "./context/CounterProvider";
function App() {
  return (
    <div className="">
      <header className=""></header>
      {/**
       * In this code, the CounterProvider component is being used to
       * wrap two child components, ChildA and ChildB. This means that any
       * data or functionality provided by the CounterProvider component
       * will be accessible by its child components, ChildA and ChildB.
       */}
      <CounterProvider>
        <ChildA />
        <ChildB />
      </CounterProvider>
    </div>
  );
}

export default App;
