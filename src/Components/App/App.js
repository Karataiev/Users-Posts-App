import { PostsListPage } from "../PostsListPage/PostsListPage";
import { UserListPage } from "../UserListPage/UserListPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/posts" element={<PostsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
