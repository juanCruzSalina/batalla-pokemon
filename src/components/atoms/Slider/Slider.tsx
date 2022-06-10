import React from 'react'
import './Slider.css'

interface ISlider {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Slider: React.FC<ISlider> = (props) => {
  return (
    <div className='slider__main'>
      <label className='input__container'>
        0
        <input className='slider__input' {...props} type={'range'} defaultValue={'50'} min={'0'} max={'100'}/>
        100
      </label>
    </div>
  )
}

export default Slider