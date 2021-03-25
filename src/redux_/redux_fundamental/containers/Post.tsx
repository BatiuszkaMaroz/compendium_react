import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { removePost } from '../store/postsSlice';

import ReactionButton from '../components/ReactionButton';

const Post: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const post = useTypedSelector((s) => s.posts.list.find((p) => p.id === id));
  const user = useTypedSelector((s) =>
    s.users.list.find((u) => u.id === post?.userId),
  );

  const removeHandler = () => {
    dispatch(removePost(id));
  };

  if (!post || !user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-8 offset-md-2'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-subtitle text-muted mb-2'>
              by <Link to={`/author/${user.id}`}>{user.username}</Link>
            </p>
            <p className='card-text'>{post.body}</p>
            <div className='d-flex justify-content-between align-items-center'>
              <ReactionButton id={id} />
              <div>
                <Link to={`/post/edit/${id}`} className='btn btn-primary me-2'>
                  Edit
                </Link>
                <button onClick={removeHandler} className='btn btn-danger'>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
