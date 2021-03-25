import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addPost } from '../store/postsSlice';

import Input from '../components/Input';
import Select from '../components/Select';
import Textarea from '../components/Textarea';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useTypedSelector((s) => s.users.list);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title && content && userId) {
      dispatch(addPost(title, content, userId));
      history.push('/');
    }
  };

  return (
    <form onSubmit={onSubmit} className='col-6 offset-3'>
      <div className='mb-3'>
        <h1>Create Post</h1>
      </div>
      <div className='mb-3'>
        <Input
          label='Title'
          onChange={(e) => setTitle(e.target.value)}
          required
          value={title}
        />
      </div>
      <div className='mb-3'>
        <Textarea
          label='body'
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          value={content}
        />
      </div>
      <div className='mb-4'>
        <Select
          label='Author'
          options={users.map((u) => ({ name: u.username, value: u.id }))}
          onChange={(e) => setUserId(e.target.value)}
          required
          value={userId}
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default Form;
