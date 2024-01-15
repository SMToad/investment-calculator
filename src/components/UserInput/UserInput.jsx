import './UserInput.css';
import InputElement from './InputElement';

const INPUT_LABELS = [
    "Initial Investment",
    "Annual Investment",
    "Expected Return",
    "Duration"
]

export default function UserInput(){
    return (
        <div id='user-input'>
            <div className='input-group'>
                {INPUT_LABELS.map((inputLabel) => <InputElement inputLabel={inputLabel}/>)}
            </div>
        </div>
    )
}