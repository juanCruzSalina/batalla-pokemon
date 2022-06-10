import React, { Fragment } from 'react'
import './Image.css'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IImage {
  url?: string
}

const Image: React.FC<IImage> = (props) => {
  return (
    <Fragment>
      {props.url
        ? <img src={props.url} alt='alt-pokemon' className='image__main'/>
        : (
            <span className='alt-image'>
              <FontAwesomeIcon icon={faImage} />
            </span>
          )
      }
    </Fragment>
  )
}

export default Image