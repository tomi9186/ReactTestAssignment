import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/posts/posts.js";
import Post from "./components/post/post.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts helloMessage="Hello from" />} />
        <Route path="/post/:id" element={<Post helloMessage="Hello from" />} />
      </Routes>
    </Router>
  );
}

export default App;
