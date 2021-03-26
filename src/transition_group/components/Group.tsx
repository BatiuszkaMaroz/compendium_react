import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { nanoid } from 'nanoid';

const Group: React.FC = () => {
  const [list, setList] = useState<{ id: string; value: string }[]>([
    { id: nanoid(), value: 'eat' },
    { id: nanoid(), value: 'sleep' },
    { id: nanoid(), value: 'code' },
  ]);

  const addItem = () => {
    const value = prompt('Add item:');
    const id = nanoid();

    if (value) {
      setList((list) => [...list, { id, value }]);
    }
  };

  const removeItem = (id: string) => {
    setList((list) => list.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className='display-1'>Group</h1>
      <p className='lead mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ipsam
        modi eius expedita beatae quisquam, in, minus quaerat commodi
        consequatur rerum quidem omnis doloremque, distinctio maiores harum
        delectus odio. Temporibus.
      </p>
      <ul className='list-group'>
        <TransitionGroup component={null}>
          {list.map(({ id, value }) => (
            <CSSTransition classNames='list-slide' key={id} timeout={300}>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <p className='m-0'>{value}</p>
                <button
                  className='btn btn-danger'
                  onClick={() => removeItem(id)}
                >
                  X
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <button className='btn btn-primary mt-3' onClick={addItem}>
        Add item
      </button>
    </>
  );
};

export default Group;
