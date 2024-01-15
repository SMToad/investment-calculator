export default function InputElement({inputLabel, initValue, onValueChanged}){
    return (
        <div>
            <label>{inputLabel}</label>
            <input type="number" required value={initValue} onChange={onValueChanged}/>
        </div>
    )
}