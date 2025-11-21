import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import './TalkBtn.css'

function TalkBtn() {
  return (
    <div >
        <button className='talkBtn'>
            <FontAwesomeIcon icon={faComment} />Let's Talk
        </button>
    </div>
  )
}

export default TalkBtn