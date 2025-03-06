YoungLabs Greeting App

Installation of Project
 
Backend Setup

1.  Navigate to the server directory:
   cd c:\Users\aichc\OneDrive\Desktop\Younglabs\server
2. Install dependencies:
   npm install
3. Start the server:
   node server.js
The server will run on port 5000 by default.

 Frontend Setup
 
1. Navigate to the client directory:
  cd c:\Users\aichc\OneDrive\Desktop\Younglabs\client
2. Install dependencies:
   npm install
   Start the development server:
   npm run dev
The frontend development server will start, typically on port 5173.

Environment Variables
The frontend uses environment variables to connect to the backend:

For production: The backend URL is set to https://younglabs-ten.vercel.app
For local development: You can create a .env.local file in the client directory with:

VITE_BACKEND_URL=http://localhost:5000

Thank You...
