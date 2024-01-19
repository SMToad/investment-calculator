import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [inputValues, setInputValues] = useState(
    {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    }
  );

  let inputIsValid = inputValues.duration >= 1;

  function handleChange(newValueId, newValue){
    setInputValues((oldInput) => {
      return {...oldInput,
        [newValueId]: +newValue};
    });
  }

  return (
    <div>
      <Header/>
      <UserInput inputValues={inputValues} handleChange={handleChange}/>
      {!inputIsValid && 
        <p className="center">
          Please enter values that are greater than zero.
        </p>
      }
      {inputIsValid && <Result inputData={inputValues}/>}
    </div>
  )
}

export default App
