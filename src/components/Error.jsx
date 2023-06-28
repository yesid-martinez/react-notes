import React from 'react';
import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import "./Error/error.css"

import LocalizationContext from '../context/LocalizationContext';

const Error = ({setError}) => {

  const local = useContext(LocalizationContext);

  return (
    <div className='error-layout'>
        <div className='error'>
          <h3>Error!</h3>
          <div>{local.error}</div>
        </div>
        <div className='error-icon'>
          <AiOutlineClose 
          onClick={() => setError(false)}
          />
        </div>
        <img src="../../public/warn-img.svg " alt="Error" />
    </div>
  )
}

export default Error