import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchPosts } from './store/postsSlice';
import { useTypedSelector } from './store/useTypedSelector';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { list, status } = useTypedSelector((s) => s.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div className='container'>
      <ul className='list-group my-5'>
        {list.map((p) => (
          <li className='list-group-item' key={nanoid()}>
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
