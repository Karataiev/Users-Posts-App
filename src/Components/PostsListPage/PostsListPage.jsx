import { useEffect, useState } from "react";
import "./PostsListPage.css";

export const PostsListPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [posts, setPosts]);
  console.log("post", posts);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="postsPage">
        <div className="header">
          <a href="/">
            <div className="back" />
          </a>
        </div>
        <ul className="postsContainer">
          {posts.map((post) => (
            <li className="postBlock">
              Post:{post.id} <br /> Info:{post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
