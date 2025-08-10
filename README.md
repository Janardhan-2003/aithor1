# Infinite Word 📖

A web application that provides definitions for words using the Google Gemini AI. Click on words within the definitions to explore related concepts and expand your vocabulary! This project features a React frontend and a Node.js/Express backend, leveraging the power of AI to deliver dynamic and interactive definitions.

## 🚀 Key Features

*   **Interactive Definitions:** Click on words within a definition to fetch and display a new definition for that word.
*   **AI-Powered:** Uses the Google Gemini AI model to generate detailed and informative word definitions.
*   **Loading States:** Implements skeleton loading states to provide a smooth user experience while fetching data.
*   **Clean UI:** A user-friendly interface built with React and styled with CSS.
*   **Backend API:** A Node.js/Express backend handles API requests and interacts with the Gemini AI model.
*   **CORS Enabled:** Backend is configured with CORS to allow requests from the frontend.
*   **Environment Variables:** Uses `.env` files to manage sensitive information like API keys.

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   React Loading Skeleton
    *   CSS
*   **Backend:**
    *   Node.js
    *   Express
    *   CORS
*   **API:**
    *   Google Gemini API

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

## 💻 Project Structure

```
infinite-word/
├── backend/
│   ├── index.js             # Backend server entry point
│   ├── package.json         # Backend dependencies and scripts
│   ├── node_modules/        # Backend dependencies
│   └── .env                 # Environment variables
├── frontend/
│   ├── public/              # Public assets (HTML, images, etc.)
│   │   ├── index.html       # Main HTML file
│   │   └── ...
│   ├── src/                 # React application source code
│   │   ├── App.js           # Main application component
│   │   ├── App.css          # Global styles
│   │   ├── index.js         # React entry point
│   │   ├── index.css        # Global styles
│   │   ├── components/      # Reusable React components
│   │   │   ├── Header/
│   │   │   │   ├── HeaderPage.jsx   # Header component
│   │   │   │   ├── HeaderPage.css   # Header styles
│   │   │   │   └── ...
│   │   ├── Pages/
│   │   │   ├── Landing/
│   │   │   │   ├── LandingPage.jsx  # Landing page component
│   │   │   │   ├── LandingPage.css  # Landing page styles
│   │   │   │   └── ...
│   │   ├── api/             # API interaction functions
│   │   │   ├── define.js      # Function to fetch definitions
│   │   │   └── ...
│   │   ├── reportWebVitals.js # Performance monitoring
│   │   └── ...
│   ├── package.json         # Frontend dependencies and scripts
│   ├── node_modules/        # Frontend dependencies
│   └── .env                 # Environment variables
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
├── README.md              # Project documentation (this file)
└── ...
```

## 📸 Screenshots

(Add screenshots of the application here to showcase its features and UI.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [your-email@example.com](jrkokatam.09@gmail.com).

## 💖 Thanks

Thank you for checking out the Infinite Word project! We hope you find it useful and enjoyable.

