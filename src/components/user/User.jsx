import React from "react";
import styles from "./UserStyle.module.css";

function User({ user, repos }) {
  return (
    <div>
      <div className={styles.userAvatarAndName}>
        <span>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            className={styles.avatarImage}
          />
        </span>
        <span>
          <h2>{user.name}</h2>
        </span>
      </div>
      <p>
        <b>Bio:</b> {user.bio}
      </p>
      <p>
        <b>Location:</b> {user.location}
      </p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={() => window.location.reload(false)}>Reset</button>
    </div>
  );
}

export default User;
