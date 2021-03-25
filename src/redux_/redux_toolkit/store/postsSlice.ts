import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { nanoid } from 'nanoid';
import { RootState } from './store';

const initialState: {
  list: Post[];
  status: Status;
} = {
  list: [],
  status: 'idle',
};

export const fetchPosts = createAsyncThunk<Post[]>('posts/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: FetchedPost[] = await res.json();

  const formatted: Post[] = data.map((p) => ({
    ...p,
    id: '' + p.id,
    userId: '' + p.userId,
    date: sub(Date.now(), {
      days: Math.floor(Math.random() * 100),
    }).toISOString(),
    reactions: {},
  }));

  return formatted;
});

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      prepare: (
        title: string,
        body: string,
        userId: string,
      ): { payload: Post } => {
        return {
          payload: {
            title,
            body,
            userId,
            id: nanoid(),
            date: new Date().toISOString(),
            reactions: {},
          },
        };
      },
      reducer: (state, action: PayloadAction<Post>) => {
        state.list.push(action.payload);
        state.list.sort((a, b) => b.date.localeCompare(a.date));
      },
    },
    editPost: {
      prepare: (id: string, updates: PostUpdates) => {
        return { payload: { id, updates } };
      },
      reducer: (
        state,
        action: PayloadAction<{ id: string; updates: PostUpdates }>,
      ) => {
        const { id, updates } = action.payload;
        let post = state.list.find((p) => p.id === id);

        if (post) {
          post = { ...post, ...updates };
        }
      },
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
    addReaction: (
      state,
      action: PayloadAction<{ id: string; reaction: string }>,
    ) => {
      const { id, reaction } = action.payload;
      const post = state.list.find((p) => p.id === id);

      if (post) {
        if (post.reactions[reaction] !== undefined) {
          post.reactions[reaction]++;
        } else {
          post.reactions[reaction] = 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        state.list = action.payload;
        state.list.sort((a, b) => b.date.localeCompare(a.date));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const selectPostsByUserId = createSelector(
  [
    (state: RootState) => state.posts.list,
    (state: RootState, userId: string) => userId,
  ],
  (posts, userId) => posts.filter((p) => p.userId === userId),
);

export const { addPost, addReaction, editPost, removePost } = slice.actions;
export default slice.reducer;

type Status = 'idle' | 'pending' | 'success' | 'failed';

interface FetchedPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
  date: string;
  reactions: { [k: string]: number };
}

type PostUpdates = Partial<
  Omit<
    Post,
    | 'id' //
    | 'userId'
    | 'date'
  >
>;
