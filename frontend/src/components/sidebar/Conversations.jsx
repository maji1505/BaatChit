import React from 'react'
import Conversation from './Conversation'

function Conversations() {
  return (
    <div className='py-2 flex flex-col overflow-auto hidden-scrollbar scroll-smooth'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations