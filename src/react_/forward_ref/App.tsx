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
  }, [fancyRef, inputRef]);

  return (
    <div className='container'>
      <div className='input-group mt-3'>
        <FancyButton ref={fancyRef}>Fancy Focus</FancyButton>
        <input className='form-control' ref={(e) => (inputRef = e)} />
      </div>
    </div>
  );
};

export default App;
