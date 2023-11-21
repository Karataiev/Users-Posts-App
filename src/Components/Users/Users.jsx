import { useEffect, useState } from "react";
import "./Users.css";

export const Users = ({ userState }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [state, setState] = userState;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setState({ ...state, users: result });
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const sortUsers = state.users.sort((a, b) => {
    const firstUser = a.username.toLowerCase();
    const secondUser = b.username.toLowerCase();
    if (state.isSorted) {
      if (firstUser < secondUser) {
        return -1;
      }
      if (firstUser > secondUser) {
        return 1;
      }
    } else {
      if (firstUser > secondUser) {
        return -1;
      }
      if (firstUser < secondUser) {
        return 1;
      }
    }
    return 0;
  });

  const searchedUsers = sortUsers.filter((el) => {
    if (!state.search) {
      return el;
    } else {
      return (
        el.username.toLowerCase().includes(state.search) ||
        el.username.toUpperCase().includes(state.search)
      );
    }
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="usersContainer">
        {searchedUsers.map((user) => (
          <li key={user.id} className="userBlock">
            Username: {user.username} <br />
            Email: {user.email}
          </li>
        ))}
      </ul>
    );
  }
};
