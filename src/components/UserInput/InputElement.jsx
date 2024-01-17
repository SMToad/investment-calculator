export default function InputElement({inputLabel, input, handleChange}){
    return (
        <div>
            <label>{inputLabel}</label>
            <input 
                type="number" 
                required 
                value={input.value} 
                onChange={(e) => handleChange(e, input.key)}/>
        </div>
    )
}