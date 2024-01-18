import { calculateInvestmentResults } from '../../util/investment';
import './Result.css';

const COLUMN_HEADERS = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital"
]

export default function Result({inputData}){
    let annualData = calculateInvestmentResults(inputData);
    return (
        <table id="result">
            <thead>
                <tr>
                    {COLUMN_HEADERS.map((header, i) => <th key={i}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {annualData.map((row, i) => (
                    <tr key={i}>
                        {
                            Object.entries(row).map(([cellKey, cellValue], i) => (
                            <td key={cellKey + i}>{cellValue}</td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
}