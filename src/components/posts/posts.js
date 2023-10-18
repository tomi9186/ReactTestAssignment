import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./posts.css";

const Posts = ({ helloMessage }) => {
  const componentName = "Posts";
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleSearch = (text) => {
    const filtered = posts.filter((post) => {
      return post.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredPosts(filtered);
    setSearchText(text);
  };
  console.log(`${helloMessage} ${componentName}`);
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" />
            React test Assignment
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar2"
            aria-controls="myNavbar2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="lc-block collapse navbar-collapse" id="myNavbar2">
            <form
              role="search"
              method="get"
              id="searchform"
              action="/"
              className="d-flex ms-auto justify-content-center"
            >
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search by title"
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="search"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <ul className="row py-5">
          {filteredPosts.map((post) => (
            <li className="col-md-4" key={post.id}>
              <h3>
                <a href={`/post/${post.id}`}>{post.title}</a>
              </h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
