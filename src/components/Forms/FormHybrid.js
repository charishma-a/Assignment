import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import './Form.css';
import FormHdata from './HybridData';
import hybrid from '../../images/hybrid.jpg'


const FormHybrid = ({toggleModal, onSave}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(values) {
    setIsSubmitted(true);
    onSave(values, 'hybrid');
    toggleModal()
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={hybrid} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormHdata submitForm={submitForm} /> 
        ) : (
          <Home/>
        )}
      </div>
    </>
  );
};

export default FormHybrid;