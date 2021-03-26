import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { fetchPosts } from './store/posts/postsActions';
import { fetchUsers } from './store/users/usersActions';
import { useTypedSelector } from './hooks/useTypedSelector';

import Author from './containers/Author';
import Edit from './containers/Edit';
import Form from './containers/Form';
import List from './containers/List';
import Navigation from './containers/Navigation';
import Post from './containers/Post';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const p = useTypedSelector((s) => s.posts);
  const u = useTypedSelector((s) => s.users);

  useEffect(() => {
    if (p.status === 'idle') dispatch(fetchPosts());
    if (u.status === 'idle') dispatch(fetchUsers());
  }, [dispatch, p.status, u.status]);

  const renderContent = () => {
    if (u.status !== 'success' || p.status !== 'success') {
      return <Spinner />;
    }

    return (
      <Switch>
        <Route path='/' exact component={List} />
        <Route path='/author/:id' exact component={Author} />
        <Route path='/form' exact component={Form} />
        <Route path='/post/edit/:id' component={Edit} />
        <Route path='/post/:id' exact component={Post} />
        <Redirect to='/' />
      </Switch>
    );
  };

  return (
    <div>
      <Navigation />
      <div className='container py-5'>{renderContent()}</div>
    </div>
  );
};

export default App;
