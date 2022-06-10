import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css'

interface IButton {
  icon?: IconDefinition;
  children: string;
  onClick: () => any;
  isSubmit?: boolean
  isDisabled?: boolean
}

const Button: React.FC<IButton> = (props) => {
  const handleClick = () => {
    props.onClick()
  }
  return (
    <button
      className={`button__main${props.isDisabled ? ' disabled' : ''}`}
      onClick={handleClick}
      type={props.isSubmit ? 'submit' : 'button'}
    >
      {props.icon && <FontAwesomeIcon className='button__icon' icon={props.icon as IconDefinition}/>}
      <p className='button__text'>
        {props.children}
      </p>
    </button>
  )
}

export default Button