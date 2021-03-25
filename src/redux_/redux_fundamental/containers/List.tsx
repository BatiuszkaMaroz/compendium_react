import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { formatDistanceToNow, parseISO } from 'date-fns';
import { useTypedSelector } from '../hooks/useTypedSelector';

const List: React.FC = () => {
  const posts = useTypedSelector((s) => s.posts.list);
  const users = useTypedSelector((s) => s.users.list);

  return (
    <ul className='list-group'>
      {posts.map((p) => (
        <Link
          key={nanoid()}
          to={`/post/${p.id}`}
          className='list-group-item list-group-item-action'
        >
          <div className='d-flex justify-content-between'>
            <h5>{p.title}</h5>
            <small>{formatDistanceToNow(parseISO(p.date))}</small>
          </div>
          {/* <div>
            by {users.find((u) => u.id === p.userId)?.username || 'unknown'}
          </div> */}
        </Link>
      ))}
    </ul>
  );
};

export default List;
