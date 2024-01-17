import './UserInput.css';
import InputElement from './InputElement';

export default function UserInput({inputValues, handleChange}){
    const inputList = Object.keys(inputValues).map((key) => ({key: key, value: inputValues[key]}));
    let labeledValues = {
        "Initial Investment": inputList[0],
        "Annual Investment": inputList[1],
        "Expected Return": inputList[2],
        "Duration": inputList[3]
      };

    return (
        <div id='user-input'>
            <div className='input-group'>
                {
                    Object.entries(labeledValues).map(([inputLabel, input], i) => (
                        <InputElement 
                            key={i} 
                            inputLabel={inputLabel} 
                            input={input} 
                            handleChange={handleChange}/>
                    ))
                }
            </div>
        </div>
    )
}