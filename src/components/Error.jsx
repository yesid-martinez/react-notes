import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import "./Error/error.css"

const Error = ({setError}) => {
  return (
    <div className='error-layout'>
        <div className='error'>
          <h3>Error!</h3>
          <div>Hubo un error, intente de nuevo.</div>
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