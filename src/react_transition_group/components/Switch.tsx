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
    <div>
      <h1>Switch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        perferendis voluptatibus illo omnis iure architecto amet, nisi expedita
        quaerat dignissimos.
      </p>
      <div>
        <div>
          <label htmlFor='out-in'>out-in</label>
          <input
            defaultChecked
            id='out-in'
            name='mode'
            onInput={() => setMode('out-in')}
            type='radio'
          />
        </div>
        <div>
          <label htmlFor='in-out'>in-out</label>
          <input
            id='in-out'
            name='mode'
            onInput={() => setMode('in-out')}
            type='radio'
          />
        </div>
      </div>
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={text}
          classNames='slide'
          timeout={300}
          // onEnter={() => setLock(true)}
          // onExited={() => setLock(false)}
        >
          <div className='button'>
            <button onClick={toggleText}>{text}</button>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Switch;
