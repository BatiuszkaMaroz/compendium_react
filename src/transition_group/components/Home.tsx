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
    <>
      <h1 className='display-1'>Home</h1>
      <p className='lead mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia
        quia exercitationem placeat autem ullam officiis ipsum! Corporis ducimus
        cupiditate ratione! Earum molestiae illo deserunt a ipsa, autem
        excepturi! Hic autem ipsa doloribus, assumenda eligendi vitae reiciendis
        beatae odio dolores.
      </p>
      <CSSTransition
        classNames='modal-fade'
        in={modal}
        onEnter={() => setButton(false)}
        onExited={() => setButton(true)}
        timeout={300}
        unmountOnExit
      >
        <div style={{ width: '600px' }} className='card'>
          <div className='card-header d-flex justify-content-between align-items-center'>
            The Modal
            <button className='btn-close' onClick={closeModal}></button>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>The Modal</h5>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates iure rerum modi, eos repudiandae facilis delectus amet
              a velit atque minus exercitationem, veritatis distinctio maiores
              obcaecati nemo mollitia adipisci doloremque at, explicabo neque.
              Voluptatibus officia magnam perspiciatis magni doloremque veniam.
              Autem excepturi earum possimus unde distinctio ex eum totam.
              Ullam?
            </div>
          </div>
        </div>
      </CSSTransition>
      {button && (
        <button className='btn btn-outline-primary' onClick={showModal}>
          Show Modal
        </button>
      )}
    </>
  );
};

export default Home;
