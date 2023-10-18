import React, { useEffect, useState } from "react";

const Comments = ({ postId, helloMessage }) => {
  const [comments, setComments] = useState([]);
  const [helloM, setHellM] = useState(null);
  const componentName = "Comments";

  useEffect(() => {
    if (!helloM) setHellM(true);
    if (helloM) console.log(`${helloMessage} ${componentName}`);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [postId, helloM, helloMessage]);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> - {comment.email}
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
