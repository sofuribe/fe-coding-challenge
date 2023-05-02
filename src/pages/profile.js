import React, { useState, useEffect } from "react";

const UserProfile = ({ location }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${location.state.username}`, {
          headers: {
            Authorization: `Bearer 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`
          }
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [location]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} alt={user.name} />
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
};

export default UserProfile;
