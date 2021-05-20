import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, remove } from '../../store/commentsSlice';

const Box: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const removeHandler = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <ul className='list-group col-6 offset-3'>
      {posts.map((p) => (
        <li
          className='list-group-item d-flex justify-content-between'
          key={p.id}
        >
          <span>{p.title}</span>
          <button
            onClick={() => removeHandler(p.id)}
            className='btn btn-close'
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default Box;
