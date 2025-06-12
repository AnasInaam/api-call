# My Fullstack App

This project is a fullstack application that consists of a Python Flask API and a Next.js frontend. The Flask API provides several basic APIs, and the Next.js frontend interacts with these APIs to display results.

## Project Structure

```
my-fullstack-app
├── flask-api
│   ├── app.py
│   ├── requirements.txt
│   ├── apis
│   │   ├── word_count.py
│   │   ├── number_addition.py
│   │   ├── api3.py
│   │   ├── api4.py
│   │   └── api5.py
│   └── README.md
├── nextjs-frontend
│   ├── pages
│   │   ├── index.tsx
│   │   └── api
│   │       └── hello.ts
│   ├── components
│   │   └── ApiForm.tsx
│   ├── public
│   ├── styles
│   │   └── Home.module.css
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
└── README.md
```

## Flask API

The Flask API is located in the `flask-api` directory. It includes the following features:

- **Word Count API**: Counts the number of words in a given text.
- **Number Addition API**: Adds two numbers and returns the result.
- **String Reversal API**: Reverses a given string.
- **Temperature Conversion API**: Converts Celsius to Fahrenheit.
- **Palindrome Check API**: Checks if a given string is a palindrome.

### Running the Flask API

1. Navigate to the `flask-api` directory.
2. Install the required dependencies using:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   python app.py
   ```

## Next.js Frontend

The Next.js frontend is located in the `nextjs-frontend` directory. It includes a user interface for interacting with the Flask APIs.

### Running the Next.js Frontend

1. Navigate to the `nextjs-frontend` directory.
2. Install the required dependencies using:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Deployment

- The Next.js application can be deployed on Vercel.
- The Flask API can be deployed on Render.

## API Calls

The Next.js frontend will make API calls to the Flask backend to fetch data and display results. Ensure that both the frontend and backend are running for the application to function correctly.

## Enhancements

- Consider adding error handling for API calls.
- Implement loading states in the UI while waiting for API responses.
- Style the components for better user experience.
- Add unit tests for both the Flask API and Next.js components.

## License

This project is open-source and available under the MIT License.