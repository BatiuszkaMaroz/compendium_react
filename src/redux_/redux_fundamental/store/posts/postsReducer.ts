import { Reducer } from 'redux';
import { PostsAction } from './postsActions';

export type PostsState = {
  status: Status;
  list: Post[];
};
const initialState: PostsState = {
  status: 'idle',
  list: [],
};

const postsReducer: Reducer<PostsState, PostsAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'posts/add': {
      state.list.push(action.payload);
      state.list.sort((a, b) => b.date.localeCompare(a.date));

      return { ...state };
    }

    case 'posts/edit': {
      const { id, updates } = action.payload;
      const post = state.list.find((p) => p.id === id);

      if (post) {
        Object.assign(post, updates);
      }

      return { ...state };
    }

    case 'posts/remove': {
      const filtered = state.list.filter((p) => p.id !== action.payload);
      return { ...state, list: filtered };
    }

    case 'posts/add_reaction': {
      const { id, reaction } = action.payload;
      const post = state.list.find((p) => p.id === id);

      if (post) {
        if (post.reactions[reaction] !== undefined) {
          post.reactions[reaction]++;
        } else {
          post.reactions[reaction] = 1;
        }
      }

      return { ...state };
    }

    case 'posts/fetch/pending': {
      return { ...state, status: 'pending' };
    }

    case 'posts/fetch/fullfilled': {
      action.payload.sort((a, b) => b.date.localeCompare(a.date));
      return { status: 'success', list: action.payload };
    }

    case 'posts/fetch/rejected': {
      return { status: 'failed', list: [] };
    }

    default:
      return state;
  }
};

export default postsReducer;

type Status = 'idle' | 'pending' | 'success' | 'failed';

export interface FetchedPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  body: string;
  date: string;
  reactions: { [k: string]: number };
}

export type PostUpdates = Partial<
  Omit<
    Post,
    | 'id' //
    | 'userId'
    | 'date'
  >
>;
