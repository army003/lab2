import React, { useState } from "react";
import { binaryOperation } from "./utils/binaryOperations";
import { decimalOperations } from "./utils/decimalOperations";
const components = [
  { value: "delete", label: "C" },
  { value: "/", label: "/" },
  { value: "x", label: "x" },
  { value: "+", label: "+" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "-", label: "-" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "0", label: "0" },
];
const options = ["binary", "decimal", "hex", "octal"];
const operators = ["+", "-", "x", "/"];

function Calculator() {
  const [system, setSystem] = useState("binary");
  const [first,setFirst]=useState("")
  const [display, setDisplay] = useState("");
  const [finalResult, setFinalResult] = useState();

  const handleButtonClick = (item) => {
    setFinalResult();
    const found = operators.find((i) => item.value === i);
    setFinalResult();
    if (item.value !== found) {
      item.value === "delete"
        ? setDisplay("")
        : setDisplay(display + item.value);
      item.value === "delete"&&setFirst('')
    } else if (item.value === found) {
      if(first?.length===0){
        setFirst(display);
        setDisplay("");
      }else{
        performOperations(system,item)
      }
    }
  };

  const performOperations=(system,item)=>{
    switch(system){
      case 'binary':
        console.log('item value',item.value)
        setDisplay("");
        setFinalResult(binaryOperation(String(display),String(first),item.value));
        setFirst("");
        break;
      case 'decimal':
        setDisplay("");
        setFinalResult(decimalOperations(parseInt(display),parseInt(first),item.value));
        setFirst("");
        break;
      default:
        break;
    }
  }
  console.log(' first',system.tar)
  return (
    <div className="grid place-content-center mt-10">
      <p className="text-center text-[28px] mb-10 text-[#fff]">Regular</p>
      <div className="bg-[#AA998F] rounded-2xl p-5 w-full flex flex-col gap-5">
        <div className="bg-[#E8EBE4] w-full p-5 text-[#B08968] rounded-md h-[50px] flex items-center justify-end">
          {display||finalResult}
        </div>
        <select
          className="rounded-md bg-[#7D4F50] p-1 text-[#fff]"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
        >
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <div className="grid grid-cols-4 gap-3">
          {components.map((item) => (
            <button onClick={() => handleButtonClick(item)}>
              <div className="overflow-none text-[#fff] cursor-pointer shadow rounded-full bg-[#7D4F50] flex items-center justify-center w-[40px] h-[40px]">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
