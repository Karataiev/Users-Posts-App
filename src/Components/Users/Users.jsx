import { useEffect, useState } from "react";
import "./Users.css";
import { SearchAndSort } from "../SearchAndSort/SearchAndSort";

export const Users = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const sortUsers = users.sort((a, b) => {
    const firstUser = a.username.toLowerCase();
    const secondUser = b.username.toLowerCase();
    if (sort) {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <SearchAndSort sorting={[sort, setSort]} />
        <ul className="usersContainer">
          {sortUsers.map((user) => (
            <li key={user.id} className="userBlock">
              Username: {user.username} <br />
              Email: {user.email}
            </li>
          ))}
        </ul>
      </>
    );
  }
};
