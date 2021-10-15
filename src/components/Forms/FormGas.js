import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import './Form.css';
import FormGdata from './FormGdata';
import gas from '../../images/gas.jpg'
const FormGas = ({toggleModal, onSave}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(values) {
    onSave(values, 'gas');
    setIsSubmitted(true);
    toggleModal()
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={gas} alt='gas' />
        </div>
        {!isSubmitted ? (
          <FormGdata submitForm={submitForm} /> 
        ) : (
          <Home/>
        )}
      </div>
    </>
  );
};

export default FormGas;