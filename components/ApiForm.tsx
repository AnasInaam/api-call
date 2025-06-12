import React, { useState } from 'react';

const API_BASE_URL = 'https://my-flask-api-ayiq.onrender.com';

const ApiForm: React.FC = () => {
    const [apiType, setApiType] = useState<string>('word_count');
    const [inputData, setInputData] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const handleApiCall = async (e: React.FormEvent) => {
        e.preventDefault();
        let endpoint = '';

        switch (apiType) {
            case 'word_count':
                endpoint = `${API_BASE_URL}/word_count`;
                break;
            case 'number_addition':
                endpoint = `${API_BASE_URL}/number_addition`;
                break;
            case 'string_reversal':
                endpoint = `${API_BASE_URL}/string_reversal`;
                break;
            case 'temperature_conversion':
                endpoint = `${API_BASE_URL}/temperature_conversion`;
                break;
            case 'palindrome_check':
                endpoint = `${API_BASE_URL}/palindrome_check`;
                break;
            default:
                return;
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: inputData }),
        });

        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div>
            <form onSubmit={handleApiCall}>
                <select value={apiType} onChange={(e) => setApiType(e.target.value)}>
                    <option value="word_count">Word Count</option>
                    <option value="number_addition">Number Addition</option>
                    <option value="string_reversal">String Reversal</option>
                    <option value="temperature_conversion">Temperature Conversion</option>
                    <option value="palindrome_check">Palindrome Check</option>
                </select>
                <input
                    type="text"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Enter input data"
                />
                <button type="submit">Submit</button>
            </form>
            {result && <div>Result: {result}</div>}
        </div>
    );
};

export default ApiForm;