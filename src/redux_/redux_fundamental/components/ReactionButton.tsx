import React from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from '../store/postsSlice';
import { nanoid } from 'nanoid';
import { useTypedSelector } from '../hooks/useTypedSelector';

const reactions = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

interface Props {
  id: string;
}

const ReactionButton: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const post = useTypedSelector((s) => s.posts.list.find((p) => p.id === id));

  const onClick = (reaction: string) => {
    dispatch(addReaction({ id, reaction }));
  };

  if (!post) {
    return <p className='text-danger'>REACTIONS ERROR</p>;
  }

  return (
    <div className='btn-group'>
      {Object.entries(reactions).map(([reaction, icon]) => (
        <button
          onClick={() => onClick(reaction)}
          key={nanoid()}
          className='btn btn-light border'
        >
          {icon} {post.reactions?.[reaction] || 0}
        </button>
      ))}
    </div>
  );
};

export default ReactionButton;
