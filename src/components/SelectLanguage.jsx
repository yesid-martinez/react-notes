import React from 'react';

import { useContext } from 'react';

import LocalizationContext from '../context/LocalizationContext';
import local from '../context/ContextData';

import '../App.css';

const SelectLanguage = () => {

    const {language, setLanguage} = useContext(LocalizationContext);

    const onLanguageChange = (lang) =>{
        if(lang === "es"){
            setLanguage(local.es)
        }else if (lang === "en") {
            setLanguage(local.en)
        }else{
            setLanguage(local.fr)
        }
    }

    return (
        <div className='languages'>
            <span
                onClick={() => {onLanguageChange("es")}}
                className={language.lang == "Español" ? 'language-es-selected' : ''}
            >🇪🇸</span>
            
            <span
                onClick={() => {onLanguageChange("en")}}
                className={language.lang == "English" ? 'language-en-selected' : ''}
            >🇺🇸</span>
            
            <span
                onClick={() => {onLanguageChange("fr")}}
                className={language.lang == "Français" ? 'language-fr-selected' : ''}
            >🇫🇷</span>
        </div>
    )
};

export default SelectLanguage