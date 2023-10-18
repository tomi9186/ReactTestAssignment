import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/posts/posts.js";
import Post from "./components/post/post.js";

import "./App.css";

function App() {
  const helloMessage = "Hello from ";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts helloMessage={helloMessage} />} />
        <Route
          path="/post/:id"
          element={<Post helloMessage={helloMessage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
