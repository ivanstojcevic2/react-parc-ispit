import "./App.css";
import React, { useState } from "react";
import Login from "./components/login/Login";
import User from "./components/user/User";
import styles from "./Style.module.css";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      setUser(userData);

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        {user ? (
          <User user={user} repos={repos} />
        ) : (
          <Login onSubmit={fetchUserData} />
        )}
      </div>
    </div>
  );
}

export default App;
