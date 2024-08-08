import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className=' smq border-r border-slate-500 p-4 pb-2  h-80 md:h-[450px] flex flex-col  '>
        <SearchInput/>
        <div className='divider mt-2 mb-2  '></div>
         <Conversations/>
       <LogoutButton/>
    </div>
  )
}

export default Sidebar;


