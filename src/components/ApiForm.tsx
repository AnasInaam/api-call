import React, { useState } from 'react';
import { toast } from 'sonner';

const API_BASE_URL = 'https://my-flask-api-ayiq.onrender.com';

// Example placeholders for each API type
const placeholders: Record<string, string> = {
    word_count: 'Enter a sentence (e.g. This is a test sentence)',
    number_addition: 'Enter numbers separated by spaces (e.g. 1 2 3.5 4)',
    string_reversal: 'Enter text to reverse (e.g. hello world)',
    temperature_conversion: 'Enter value and unit (e.g. 100 C or 212 F)',
    palindrome_check: 'Enter text to check (e.g. racecar)',
};

const ApiForm: React.FC = () => {
    const [apiType, setApiType] = useState<string>('word_count');
    const [inputData, setInputData] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleApiCall = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return; // Prevent double submit
        setLoading(true);
        setResult(null);
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
                setLoading(false);
                return;
        }

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: inputData }),
            });
            const data = await response.json();
            setResult(data.result);
            toast.success('API call successful!', { id: 'api-success', description: `Result: ${data.result}` });
        } catch (err) {
            setResult('Error fetching result');
            toast.error('API call failed', { id: 'api-error', description: 'Error fetching result' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-900 rounded shadow mt-8">
            <form onSubmit={handleApiCall} className="space-y-4">
                <select value={apiType} onChange={(e) => setApiType(e.target.value)} className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-gray-100 placeholder-black dark:placeholder-gray-500">
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
                    placeholder={placeholders[apiType]}
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-gray-100 placeholder-black dark:placeholder-gray-500"
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>
            {result && (
                <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-100">
                    <strong>Result:</strong> {result}
                </div>
            )}
        </div>
    );
};

export default ApiForm;
