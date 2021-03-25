import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { selectPostsByUserId } from '../store/postsSlice';

const Author: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const author = useTypedSelector((s) => s.users.list.find((u) => u.id === id));

  // const posts = useTypedSelector((s) =>
  //   s.posts.list.filter((p) => p.userId === id),
  // );

  const posts = useTypedSelector((s) => selectPostsByUserId(s, id));

  if (!author) {
    return <Redirect to='/' />;
  }

  return (
    <div className='text-center'>
      <h1>{author.username}</h1>
      <p className='text-muted'>({author.name})</p>
      <div className='row g-3 text-start'>
        {posts.map((p) => (
          <div className='col-4' key={nanoid()}>
            <div className='card h-100'>
              <div className='card-body'>
                <h6 className='card-title'>{p.title}</h6>
                <p className='card-text'>{p.body.slice(0, 70)}...</p>
                <Link to={`/post/${p.id}`} className='card-link'>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
