import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const fetchGreeting = async () => {
    if (!name.trim()) {
      setMessage("Name is required.");
      setSuccess(false);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/greet?name=${name}`
      );
      setMessage(response.data.message);
      setSuccess(true);
    } catch (error) {
      setMessage("Error fetching greeting.", error);
      setSuccess(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card-container">
        <h1 className="app-title">YoungLabs Greeting App</h1>
        <p className="app-description">
          Enter your name to receive a personalized greeting
        </p>

        <div className="form-group">
          <label className="form-label">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>

        <button
          onClick={fetchGreeting}
          className="submit-button"
        >
          Get Greeting
        </button>

        {message && (
          <div
            className={`message-container ${
              success ? "success-message" : "error-message"
            }`}
          >
            {success ? (
              <div className="status-icon success-icon">
                ✓
              </div>
            ) : (
              <div className="status-icon error-icon">
                ✕
              </div>
            )}
            <div className="message-content">
              {success ? (
                <div className="message-title">Success</div>
              ) : (
                <div className="message-title">Error</div>
              )}
              <div>{message}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
