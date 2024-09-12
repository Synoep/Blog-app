import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  }, []);

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await fetch(`http://localhost:4000/posts/${id}`, { method: 'DELETE' });
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link href="/create">
        <button>Create New Post</button>
      </Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
