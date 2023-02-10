import React, { useEffect, useState } from "react";
import { components } from "./utils/constants";
import { dToO } from "./utils/converter";

const options = ["binary", "decimal", "hex", "octal"];
const options1 = ["decimal"];
function Converter() {
  const [from, setFrom] = useState("decimal");
  const [to, setTo] = useState("binary");
  const [number, setNumber] = useState("");
  const [finalResult, setFinalResult] = useState();

  useEffect(() => {
    if (from === to) {
      alert("Please choose different types");
      setTo("binary");
    }
  }, [from, to]);

  const handleConvert = async () => {
    setNumber("");
    let system;
    const result = [""];
    switch (to) {
      case "binary":
        system = 2;
        await dToO(number, result, system);
        setFinalResult(result.reverse().join(""));
        break;
      case "octal":
        system = 8;
        await dToO(number, result, system);
        setFinalResult(result.reverse().join(""));
        break;
      case "hex":
        system = 16;
        await dToO(number, result, system);
        setFinalResult(result.reverse().join(""));
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid place-content-center mt-10">
      <p className="text-center text-[28px] mb-10 text-[#fff]">Converter</p>
      <div className="bg-[#AA998F] rounded-[25px] p-5 w-full flex flex-col gap-5">
        <div className="bg-[#E8EBE4] w-full p-5 text-[#af8e73] rounded-md h-[50px] flex items-center justify-end">
          {finalResult
            ? finalResult
            : number === ""
            ? `Enter ${from} number`
            : number}
        </div>
        <div className="flex w-full justify-between ">
          <div className="text-[#fff]">
            <p>From</p>
            <select
              className="rounded-md bg-[#7D4F50] p-1"
              disabled={true}
              onChange={(e) => setFrom(e)}
            >
              {options1.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="text-[#fff]">
            <p>To</p>
            <select
              className="rounded-md bg-[#7D4F50] p-1"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {options.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {components.map((item) => (
            <button
              onClick={() => {
                setFinalResult();
                item.value === "delete"
                  ? setNumber("")
                  : setNumber(number + item.value);
              }}
            >
              <div
                key={item.value}
                className=" text-[#fff] cursor-pointer shadow rounded-full bg-[#7D4F50] flex items-center justify-center w-[40px] h-[40px]"
              >
                {item.label}
              </div>
            </button>
          ))}
        </div>
        <button
          className="bg-[#7D4F50] rounded-2xl p-2 text-[#fff]"
          onClick={handleConvert}
        >
          convert
        </button>
      </div>
    </div>
  );
}

export default Converter;
