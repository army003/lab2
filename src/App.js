import { useState } from "react";
import "./App.css";
import Calculator from "./calculator";
import Converter from "./converter";

function App() {
  const [active, setActive] = useState("regular");
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex gap-3 w-full justify-center">
        <button
          className={"bg-[#AA998F] text-[#fff] p-2 rounded-2xl"}
          onClick={() => setActive("regular")}
        >
          regular
        </button>
        <button
          className="bg-[#AA998F] text-[#fff] p-2 rounded-2xl"
          onClick={() => setActive("converter")}
        >
          converter
        </button>
      </div>
      {active === "regular" ? <Calculator /> : <Converter />}
    </div>
  );
}

export default App;
