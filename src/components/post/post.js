import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../comments/comments.js";
import fetchAuthorName from "../../helpers/apihelper.js";
import logo from "../../logo.svg";
import "./post.css";

const Post = ({ helloMessage }) => {
  const componentName = "Post";
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [helloM, setHellM] = useState(null);

  useEffect(() => {
    if (!helloM) setHellM(true);
    if (helloM) console.log(`${helloMessage} ${componentName}`);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        fetchAuthorName(data.userId)
          .then((name) => setAuthorName(name))
          .catch((error) => {
            console.error("Error fetching author name:", error);
            setAuthorName("Author Name Not Found");
          });
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setPost(null);
      });
  }, [id, helloMessage, helloM]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" />
            React test Assignment
          </a>
        </div>
      </nav>
      {post ? (
        <div className="container py-5">
          <h3>{post.title}</h3>
          <h5>Author: {authorName}</h5>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <section id="comments" className="bg-light py-5">
        <div className="container">
          {id && <Comments postId={id} helloMessage={helloMessage} />}
        </div>
      </section>
      <p align="center">
        <a className="btn btn-primary mt-5" href="/">
          Back to posts
        </a>
      </p>
    </div>
  );
};

export default Post;
