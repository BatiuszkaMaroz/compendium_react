import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

//? Lock property is needed when out-in mode is chosen, to prevent duplicate key error
//? which doesn't appear in normal mode

const Switch: React.FC = () => {
  const [text, setText] = useState<string>('Hello world!');
  const [mode, setMode] = useState<'out-in' | 'in-out'>('out-in');
  // const [lock, setLock] = useState<boolean>(false);

  const toggleText = () => {
    // if (lock) return;

    if (text === 'Hello world!') {
      setText('Goodbye world!');
    } else {
      setText('Hello world!');
    }
  };

  return (
    <>
      <h1 className='display-1'>Switch</h1>
      <p className='lead mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit
        quasi voluptatem doloremque sint vel culpa repellat, recusandae
        excepturi aut ipsum corporis itaque laboriosam tempora repudiandae
        impedit quos amet deserunt.
      </p>
      <form className='mb-3'>
        <div className='form-check form-check-inline me-4'>
          <label className='form-check-label' htmlFor='out-in'>
            out-in
          </label>
          <input
            className='form-check-input'
            defaultChecked
            id='out-in'
            name='mode'
            onInput={() => setMode('out-in')}
            type='radio'
          />
        </div>
        <div className='form-check form-check-inline'>
          <label className='form-check-label' htmlFor='in-out'>
            in-out
          </label>
          <input
            className='form-check-input'
            id='in-out'
            name='mode'
            onInput={() => setMode('in-out')}
            type='radio'
          />
        </div>
      </form>
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={text}
          classNames='slide'
          timeout={300}
          // onEnter={() => setLock(true)}
          // onExited={() => setLock(false)}
        >
          <button
            className='btn btn-primary btn-lg d-block mb-2'
            onClick={toggleText}
          >
            {text}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Switch;
