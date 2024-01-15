import './Result.css';

const COLUMN_HEADERS = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital"
]

export default function Result(){
    return (
        <table id="result">
            <thead>
                {COLUMN_HEADERS.map((header) => <th>{header}</th>)}
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}