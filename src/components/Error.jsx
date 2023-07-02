import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import "./Error/error.css"

import LocalizationContext from '../context/LocalizationContext';

// eslint-disable-next-line react/prop-types
const Error = ({setError}) => {

  const {language} = useContext(LocalizationContext);

  return (
    <div className='error-layout'>
        <div className='error'>
          <h3>{language.errTitle}</h3>
          <div>{language.error}</div>
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