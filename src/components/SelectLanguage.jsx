import React from 'react'

const SelectLanguage = ({onLanguageChange}) => {
    return (
        <div className='idioms'>
            <span onClick={() => {onLanguageChange("es")}}>🇪🇸</span>
            <span onClick={() => {onLanguageChange("en")}}>🇺🇸</span>
        </div>
    )
};

export default SelectLanguage