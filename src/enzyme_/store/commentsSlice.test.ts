import reducer, { add, remove } from './commentsSlice';
import { nanoid } from '@reduxjs/toolkit';

const id = nanoid();
const title = 'box box';

describe('actions', () => {
  it('add', () => {
    const action = add(title);

    expect(action.payload).toBe(title);
    expect(action.type).toBe('comments/add');
  });

  it('remove', () => {
    const action = remove(id);

    expect(action.payload).toBe(id);
    expect(action.type).toBe('comments/remove');
  });
});
describe('reducer handles', () => {
  it('add', () => {
    const state = reducer([], add(title));
    expect(state.length).toEqual(1);

    expect(typeof state[0].id).toBe('string');
    expect(state[0].title).toBe(title);
  });

  it('remove', () => {
    const state = reducer([{ id, title }], remove(id));

    expect(state.length).toEqual(0);
  });
});
