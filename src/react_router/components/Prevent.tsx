import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const Prevent: React.FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <Prompt
        when={!!value}
        message={(loc) => `Are you sure you want to go to ${loc.pathname}?`}
      />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Prevent;
