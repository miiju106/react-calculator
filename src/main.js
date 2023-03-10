// import React, { useEffect } from "react";


const Main = ({result, setResult, final, setFinal}) => {

    // if you want the answer to change when clicking on your numbers this useEffect funct will be okay

    // useEffect(()=>{
    //     equalTo()
    // }, [result]);

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));

  };
  const deleteAll = () =>{
      setResult("");
      setFinal("");
  }
  const backspace = () =>{
      setResult(result.slice(0, result.length-1))
  }

  const equalTo = () => {
      try{
        setFinal(eval(result).toString())
      }catch(err){
        setFinal("MathError")
      }
  }
  return (
    <div className="main-container">
      <div className="display">
        {result ? (<input type="text" value={result}/>):(<input type="text" value={"0"}/>)}
        
        <input type="text" className="text" value={final}/>
      </div>
      <div className="button-container">
        <button className=" calc-button span-two cancel" onClick={deleteAll}>AC</button>
        <button className="calc-button cancel" onClick={backspace}>DEL</button>
        <button name="/" onClick={handleClick} className="calc-button calc-sign">
          /
        </button>
        <button name="1" onClick={handleClick} className="calc-button">
          1
        </button>
        <button name="2" onClick={handleClick} className="calc-button">
          2
        </button>
        <button name="3" onClick={handleClick} className="calc-button">
          3
        </button>
        <button name="*" onClick={handleClick} className="calc-button calc-sign">
          *
        </button>
        <button name="4" onClick={handleClick} className="calc-button">
          4
        </button>
        <button name="5" onClick={handleClick} className="calc-button">
          5
        </button>
        <button name="6" onClick={handleClick} className="calc-button">
          6
        </button>
        <button name="+" onClick={handleClick} className="calc-button calc-sign">
          +
        </button>
        <button name="7" onClick={handleClick} className="calc-button">
          7
        </button>
        <button name="8" onClick={handleClick} className="calc-button">
          8
        </button>
        <button name="9" onClick={handleClick} className="calc-button">
          9
        </button>
        <button name="-" onClick={handleClick} className="calc-button calc-sign">
          -
        </button>
        <button name="." onClick={handleClick} className="calc-button">
          .
        </button>
        <button name="0" onClick={handleClick} className="calc-button">
          0
        </button>
        <button className=" span-two equal-to" onClick={equalTo}>=</button>
      </div>
    </div>
  );
};

export default Main;
