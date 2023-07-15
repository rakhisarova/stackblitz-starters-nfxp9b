import React, { useState } from 'react';
import axios from 'axios';


const LocationValidator=() => {
  const [Location, setLocation] = useState('');

  const [validationResult, setValidationResult]= useState('');


  const handleLocationChange =(event)=> {
    setLocation(event.target.value);

  };

  const validateLocation= () => {
    axios.post('/api/validate-location',{location})
    .then((response)=> {
      setValidationResult(response.data.result);
    })
    .catch((error)=> {
      console.error(error);
    });
  };
  return (
    <div>
      <h1>Location Validator App<h1>
        <label>
          Enter a location:
          <input type="text" value= {location} onChange={handleLocationChange}/>
          </label>
          <button onClick={validateLocation}>Validate</button>{
            validationResult && (
              <p>Validation Result: {validationResult}</p>
            ) }
            </div>
  );
};
export default LocationValidator;
