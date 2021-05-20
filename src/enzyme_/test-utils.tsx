import React from 'react';
import { Provider } from 'react-redux';
import { PreloadedState, setupStore } from './store/store';

export { PreloadedState } from './store/store';

export const Root: React.FC<{ state?: PreloadedState }> = ({
  state,
  children,
}) => {
  const store = setupStore(state);
  return <Provider store={store}>{children}</Provider>;
};

export const withRoot = (Component: React.FC, state?: PreloadedState) => {
  const store = setupStore(state);
  const Root: React.FC = () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );

  return { Root, store };
};
