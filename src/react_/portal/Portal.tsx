/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = () => {
  return createPortal(
    <div className='text-center'>Portal</div>,
    document.querySelector('#portal')!,
  );
};

export default Portal;
