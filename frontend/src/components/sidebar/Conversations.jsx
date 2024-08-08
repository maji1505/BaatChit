import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

function Conversations() {
  const {loading,conversations }=useGetConversations();
  
  return (
    <div className='py-2 flex flex-col overflow-auto hidden-scrollbar scroll-smooth'>
      {
        conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id} conversation={conversation} 
          emoji={getRandomEmoji()} 
          lastIndex={idx=== conversations.length-1}/>
        ))
      }
    </div>
  )
}

export default Conversations;

