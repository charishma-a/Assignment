import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import './Form.css';
import FormSignup from './FormEdata';
import electric from '../../images/electric.jpg'
const Form = ({toggleModal, onSave}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(values) {
    onSave(values, 'electric');
    setIsSubmitted(true);
    toggleModal()
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
        <img className='form-img' src={electric} alt='electric' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} /> 
        ) : (
          <Home />
        )}
      </div>
    </>
  );
};

export default Form;