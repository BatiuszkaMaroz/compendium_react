import React from 'react';
import Level from './components/Level';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Level n={1}>
        <Level n={2}>
          <Level n={3} />
        </Level>
      </Level>
    </ErrorBoundary>
  );
};

export default App;
