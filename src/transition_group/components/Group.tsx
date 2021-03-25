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
    <div>
      <h1>Group</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        necessitatibus, quam eaque facere animi dolore libero saepe non corporis
        aperiam?
      </p>
      <TransitionGroup component='ul'>
        {list.map(({ id, value }) => (
          <CSSTransition classNames='slide' key={id} timeout={300}>
            <li className='item'>
              <p>{value}</p>
              <button onClick={() => removeItem(id)}>X</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button onClick={addItem}>Add item</button>
    </div>
  );
};

export default Group;
