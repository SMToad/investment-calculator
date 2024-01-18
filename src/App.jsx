import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import UserInput from "./components/UserInput/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputValues, setInputValues] = useState(
    {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    }
  );

  function removeLeadingZeros(input) {
    let result = input;
    while (result[0] === '0') {
      result = result.substring(1);
    }
    return result;
  }

  function handleChange(newValueId, newValue){
    setInputValues((oldInput) => {
      let noZeroValue = removeLeadingZeros(newValue);
      if(noZeroValue[0] === '-'){
        alert("The value must be greater than zero!");
        return oldInput;
      }
      return {...oldInput,
        [newValueId]: +newValue};
    });
  }

  return (
    <div>
      <Header/>
      <UserInput inputValues={inputValues} handleChange={handleChange}/>
      <Result inputData={inputValues}/>
    </div>
  )
}

export default App
