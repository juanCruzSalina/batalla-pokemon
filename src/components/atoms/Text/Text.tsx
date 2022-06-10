import React from 'react'
import './Text.css'
interface IText {
  children: string;
}

const Text: React.FC<IText> = (props) => {
  return (
    <p className='text__main'>
      {props.children}
    </p>
  )
}

export default Text