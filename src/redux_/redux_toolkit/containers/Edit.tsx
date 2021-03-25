import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { editPost } from '../store/postsSlice';

import Input from '../components/Input';
import Textarea from '../components/Textarea';

const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const history = useHistory();
  const post = useTypedSelector((s) => s.posts.list.find((p) => p.id === id));

  const [title, setTitle] = useState<string>(post?.title || '');
  const [body, setBody] = useState<string>(post?.body || '');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && body) {
      dispatch(editPost(id, { title, body }));
      history.push(`/post/${id}`);
    }
  };

  if (!post) {
    return <Redirect to='/' />;
  }

  return (
    <form className='col-6 offset-3' onSubmit={onSubmit}>
      <div className='mb-3'>
        <h1>Edit Post</h1>
      </div>
      <div className='mb-3'>
        <Input
          label='Title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className='mb-4'>
        <Textarea
          label='Body'
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          value={body}
        />
      </div>
      <button className='btn btn-primary'>Apply changes</button>
    </form>
  );
};

export default Edit;
