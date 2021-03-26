export const addTodo = (value: string) =>
  <const>{ type: 'todo/add', payload: value };

export const removeTodo = (id: string) =>
  <const>{ type: 'todo/remove', payload: id };

export type TodoAction = ReturnType<typeof addTodo | typeof removeTodo>;
