export default function validateInfo(values, type) {
    let errors = {};
    
    if (!values.year) {
      errors.year = 'Year required';
    }
  
  
    if (!values.make) {
      errors.make = 'Make required';
    }

    if (!values.model) {
        errors.model = 'Model required';
    }
    
    if (!values.trim) {
      errors.trim = 'Trim is required';
    } 
  
    if (!values.charge_time && type==='electric') {
      errors.charge_time = 'Charge Time is required';
    } 

    if(!values.max_km && type==='electric') {
        errors.max_km = 'Maximum km per charge is required';
    }else if (/^[A-Za-z]+/.test(values.max_km) && type === 'electric') {
      errors.fuel_consumption = 'Enter a valid number';
  }

    if(!values.fuel_consumption && type === 'gas') {
        errors.fuel_consumption = 'Fuel consumption is required'
    }else if (/^[A-Za-z]+/.test(values.fuel_consumption) && type === 'gas') {
        errors.fuel_consumption = 'Enter a valid number';
    }

    if(!values.warranty && type === 'hybrid') {
        errors.warranty = 'Warranty data is required';
    } 
    
    
    return errors;
  }