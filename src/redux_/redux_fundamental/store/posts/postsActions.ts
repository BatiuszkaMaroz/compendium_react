/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { nanoid } from 'nanoid';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { sub } from 'date-fns';
import { FetchedPost, Post, PostUpdates } from './postsReducer';
import { RootState } from '../store';

const fetchPostsPending = () => <const>{ type: 'posts/fetch/pending' };
const fetchPostsFullfilled = (posts: Post[]) =>
  <const>{
    type: 'posts/fetch/fullfilled',
    payload: posts,
  };
const fetchPostsRejected = () =>
  <const>{
    type: 'posts/fetch/rejected',
  };
export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => async (dispatch) => {
  dispatch(fetchPostsPending());

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: FetchedPost[] = await res.json();

    const formatted: Post[] = posts.map((p) => ({
      ...p,
      id: '' + p.id,
      userId: '' + p.userId,
      date: sub(Date.now(), {
        days: Math.floor(Math.random() * 100),
      }).toISOString(),
      reactions: {},
    }));

    dispatch(fetchPostsFullfilled(formatted));
  } catch (err) {
    console.error(err);
    dispatch(fetchPostsRejected());
  }
};

export const addPost = (title: string, body: string, userId: string) => {
  const post: Post = {
    id: nanoid(),
    userId,
    title,
    body,
    date: new Date().toISOString(),
    reactions: {},
  };

  return <const>{ type: 'posts/add', payload: post };
};

export const removePost = (id: string) => {
  return <const>{ type: 'posts/remove', payload: id };
};

export const editPost = (id: string, updates: PostUpdates) => {
  return <const>{ type: 'posts/edit', payload: { id, updates } };
};

export const addReaction = (id: string, reaction: string) => {
  return <const>{ type: 'posts/add_reaction', payload: { id, reaction } };
};

export type PostsAction = ReturnType<
  | typeof addPost
  | typeof removePost
  | typeof editPost
  | typeof fetchPostsPending
  | typeof fetchPostsFullfilled
  | typeof fetchPostsRejected
  | typeof addReaction
>;
