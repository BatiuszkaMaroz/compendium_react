import React from 'react';
import { useDispatch } from 'react-redux';

import { remove } from '../store/postsSlice';
import { useTypedSelector } from '../hooks/useTypedSelector';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useTypedSelector((s) => s.posts);

  const removeHandler = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <button onClick={() => removeHandler(p.id)}>[X]</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
