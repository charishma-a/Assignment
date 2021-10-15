import React from 'react';
import validate from './validateInfo.js';
import useForm from './useForm';
import './Form.css';

const FormHdata = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    'hybrid'
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Hybrid Car
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
          <label className='form-label'>Fuel Consumption per 100km</label>
          <input
            className='form-input'
            type='number'
            name='fuel_consumption'
            placeholder='Enter the fuel consumption per 100km'
            value={values.fuel_consumption}
            onChange={handleChange}
          />
          {errors.fuel_consumption && <p>{errors.fuel_consumption}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Has hybrid components warranty</label>
          <input
            className='form-input'
            type='boolean'
            name='warranty'
            placeholder='Has hybrid components warranty? Yes or no'
            value={values.warranty}
            onChange={handleChange}
          />
          {errors.warranty && <p>{errors.warranty}</p>}
        </div>
        <div className="button-wrapper">
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        <button className='form-input-btn' type='submit'>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
};

export default FormHdata;