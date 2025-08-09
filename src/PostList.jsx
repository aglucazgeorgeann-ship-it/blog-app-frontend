import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list-container">
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No posts found. Create one now!</p>
      )}
    </div>
  );
};

export default PostList;