import { useState, useEffect } from 'react';

const useForm = (callback, validate, type) => {
  const [values, setValues] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
    charge_time:0,
    max_km:0,
    fuel_consumption:0,
    warranty:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const[showModal, setShowModal] = useState(true);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = validate(values, type)
    setErrors(formErrors);
    if(!Object.keys(formErrors).length) {
      setIsSubmitting(true);
      callback(values)
    }    
  };

  const handleCancel = e => {
      setShowModal(prev=>!prev);
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        // callback(values);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors, handleCancel };
};

export default useForm;