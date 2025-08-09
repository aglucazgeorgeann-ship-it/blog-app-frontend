import React, { useState, useEffect } from 'react';
import './index.css';
import PostList from './PostList';
import NewPostForm from './NewPostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Blog</h1>
      </header>
      <main className="app-main">
        <NewPostForm onNewPost={fetchPosts} />
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export default App;