import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

function Home() {
  return (
    <div className='mediaquairy flex flex-col md:flex-row h-screen md:h-[450px] sm:h-[450px]  rounded-lg overflow-hidden
     bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-scroll hidden-scrollbar'>
      <Sidebar/>
         <MessagesContainer/>
    
    </div >
  )
}

export default Home;







