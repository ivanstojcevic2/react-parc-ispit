import React, { useState } from "react";

function Login({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  return (
    <>
      <h1>GitHub repo tražilica</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">GitHub Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="facebook ili reduxjs"
          />
        </div>
        <button type="submit">GO!</button>
      </form>
    </>
  );
}

export default Login;
