import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Home: React.FC = () => {
  const [button, setButton] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        necessitatibus, quam eaque facere animi dolore libero saepe non corporis
        aperiam?
      </p>
      <CSSTransition
        classNames='fade'
        in={modal}
        onEnter={() => setButton(false)}
        onExited={() => setButton(true)}
        timeout={300}
        unmountOnExit
      >
        <div>
          <h2>The Modal</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            incidunt.
          </p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </CSSTransition>
      {button && <button onClick={showModal}>Show Modal</button>}
    </div>
  );
};

export default Home;
