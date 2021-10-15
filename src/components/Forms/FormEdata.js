import React, {useState} from 'react';
import validate from './validateInfo.js';
import useForm from './useForm';
import './Form.css';
import Home from '../../pages/Home/Home.js';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    'electric'
  );
  const [showModal,setShowModal]= useState(true);

  const handleCancel= () =>{
    setShowModal(false);
  }

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Electric Car
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Year</label>
          <input
            className='form-input'
            type='text'
            name='year'
            placeholder='YYYY'
            value={values.year}
            onChange={handleChange}
          />
          {errors.year && <p>{errors.year}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Make</label>
          <input
            className='form-input'
            type='text'
            name='make'
            placeholder='Enter the make'
            value={values.make}
            onChange={handleChange}
          />
          {errors.make && <p>{errors.make}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Model</label>
          <input
            className='form-input'
            type=''
            name='model'
            placeholder='Enter the model'
            value={values.model}
            onChange={handleChange}
          />
          {errors.model && <p>{errors.model}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Trim</label>
          <input
            className='form-input'
            type='trim'
            name='trim'
            placeholder='Enter the trim'
            value={values.trim}
            onChange={handleChange}
          />
          {errors.trim && <p>{errors.trim}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Charge Time</label>
          <input
            className='form-input'
            type='number'
            name='charge_time'
            placeholder='Enter the charge time'
            value={values.charge_time}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Max km per charge</label>
          <input
            className='form-input'
            type='number'
            name='max_km'
            placeholder='Enter the max km per charge'
            value={values.max_km}
            onChange={handleChange}
          />
          {errors.max_km && <p>{errors.max_km}</p>}
        </div>
        <div className="button-wrapper">
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        <button className='form-input-btn' onClick={handleCancel}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
