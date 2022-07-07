import React from 'react'
import {AiOutlineLoading3Quarters} from "react-icons/ai"

function Loading() {
  return (
    <div className='loading'>
        <h3>Wird geladen</h3>
        <AiOutlineLoading3Quarters size={40} className='icon' />
    </div>
  )
}

export default Loading