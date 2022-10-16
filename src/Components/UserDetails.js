import React from "react";
import { useState, useEffect } from "react";


function UserDetails({ user }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`);
      const json = await resp.json();
      setUserDetails(json);
    })();
  }, [user]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userDetails && (
        <>
          <ul>
            <li>Name: {userDetails.name}</li>
            <li>Company: {userDetails.company.name}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default UserDetails

