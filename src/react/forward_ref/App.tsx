import React, { useRef, useEffect } from 'react';
import FancyButton from './FancyButton';

const App: React.FC = () => {
  let inputRef: HTMLInputElement | null = null;

  const fancyRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const button = fancyRef.current;

    if (button) {
      button.addEventListener('click', () => {
        console.log('So fancy!');
        inputRef?.focus();
      });
    }
  }, [fancyRef]);

  return (
    <div>
      <FancyButton ref={fancyRef}>Fancy</FancyButton>
      <input ref={(e) => (inputRef = e)} />
    </div>
  );
};

export default App;
