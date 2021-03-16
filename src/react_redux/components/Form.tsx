import React, { useState, FormEvent } from 'react';
import { add } from '../store/postsSlice';
import { useDispatch } from 'react-redux';

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (title && content) {
      dispatch(add({ title, content }));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <label htmlFor='content'>Content:</label>
        <input
          id='content'
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
