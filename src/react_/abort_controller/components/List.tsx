import { map } from 'lodash';
import React, { useEffect, useState } from 'react';

const List: React.FC = () => {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  const fetchPosts = async (signal: AbortSignal) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal,
    });
    const data: { id: number; title: string }[] = await res.json();

    setPosts(data);
  };

  useEffect(() => {
    const c = new AbortController();
    fetchPosts(c.signal);

    return () => {
      c.abort();
    };
  }, []);

  const renderContent = () => {
    if (!posts.length) {
      return <div className='spinner-border text-primary' />;
    } else {
      return (
        <ul className='list-group'>
          {posts.map((p) => (
            <li className='list-group-item' key={p.id}>
              {p.title}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <h3 className='mb-3'>List</h3>
      {renderContent()}
    </>
  );
};

export default List;
