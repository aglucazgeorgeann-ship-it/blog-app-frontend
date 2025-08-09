import React, { useState } from 'react';

const NewPostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://blog-app-backend-georgeann.onrender.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        setTitle('');
        setContent('');
        onNewPost();
        console.log('Post submitted successfully!');
      } else {
        console.error('Failed to submit post.');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div className="new-post-form-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;