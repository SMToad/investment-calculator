export default function InputElement({inputLabel, input, handleChange}){
    return (
        <p>
            <label>{inputLabel}</label>
            <input 
                type="number" 
                required 
                value={input.value} 
                onChange={(e) => handleChange(input.key, e.target.value)}/>
        </p>
    )
}