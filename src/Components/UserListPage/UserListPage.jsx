import React, { useState } from "react";
import "./UserListPage.css";
import { Users } from "../Users/Users";
import { SearchAndSort } from "../SearchAndSort/SearchAndSort";

export const UserListPage = () => {
  const [state, setState] = useState({
    isSorted: true,
    search: "",
    users: [],
  });

  return (
    <div className="userListPage">
      <SearchAndSort sortAndSearchState={[state, setState]} />
      <Users userState={[state, setState]} />
    </div>
  );
};
