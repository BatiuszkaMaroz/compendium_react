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
      name: (val) => val.length > 3,
      age: (val) => +val > 0,
    },
  });

  return (
    <div className='container col-4'>
      <h1 className='text-warning text-center'>WIP...</h1>
      <form>
        <div className='mb-3'>
          <label className='form-label' htmlFor='name'>
            Name:
          </label>
          <input
            className='form-control'
            onChange={onChange}
            value={values.name}
            id='name'
          />
          {errors.name && <p className='text-danger'>{errors.name}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='age'>
            Age:
          </label>
          <input
            className='form-control'
            onChange={onChange}
            value={values.age}
            id='age'
          />
          {errors.age && <p className='text-danger'>{errors.age}</p>}
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='phone'>
            Phone:
          </label>
          <input
            className='form-control'
            onChange={onChange}
            value={values.phone}
            id='phone'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default App;
