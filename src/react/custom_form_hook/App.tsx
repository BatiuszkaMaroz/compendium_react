import React from 'react';
import useForm from './useForm';

const App: React.FC = () => {
  const { values, onChange, errors } = useForm({
    initialValues: {
      name: '',
      age: '',
      phone: '',
    },
    validators: {
      age: (val) => +val > 0,
    },
  });

  return (
    <form>
      <div>
        <label htmlFor='name'>Name:</label>
        <input onChange={onChange} value={values.name} id='name' />
      </div>
      <br />
      <div>
        <label htmlFor='age'>Age:</label>
        <input onChange={onChange} value={values.age} id='age' />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <br />
      <div>
        <label htmlFor='phone'>Phone:</label>
        <input onChange={onChange} value={values.phone} id='phone' />
      </div>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default App;
