import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

function Home() {
  return (
    <div className='flex  md:h-[450px] sm:h-[400px] rounded-lg overflow-hidden
     bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
         <MessagesContainer/>
    </div>
  )
}

export default Home