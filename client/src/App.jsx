import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

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
      </div>
    </div>
  );
}

export default App;
