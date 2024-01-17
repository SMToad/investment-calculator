import './UserInput.css';
import InputElement from './InputElement';

export default function UserInput({inputValues, handleChange}){
    const inputList = Object.keys(inputValues).map((key) => ({key: key, value: inputValues[key]}));

    return (
        <section id='user-input'>
            <div className='input-group'>
                <InputElement 
                    inputLabel="Initial Investment"
                    input={inputList[0]}
                    handleChange={handleChange}/>
                <InputElement 
                    inputLabel="Annual Investment"
                    input={inputList[1]}
                    handleChange={handleChange}/>
            </div>
            <div className='input-group'>
                <InputElement 
                    inputLabel="Expected Return"
                    input={inputList[0]}
                    handleChange={handleChange}/>
                <InputElement 
                    inputLabel="Duration"
                    input={inputList[1]}
                    handleChange={handleChange}/>
            </div>
        </section>
    )
}