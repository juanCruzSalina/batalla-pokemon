import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Input.css'

interface IInput {
  placeholder: string;
  icon?: IconDefinition;
  hasError?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}


const Input: React.FC<IInput> = (props) => {

  return (
    <div className={`input__main${props.hasError ? ' error' : ''}`}>
      {props.icon &&
        <FontAwesomeIcon className={`input__icon`} icon={props.icon as IconDefinition}/>
      }
      <input className={`input__text`} {...props}/>
    </div>
  )
}

export default Input