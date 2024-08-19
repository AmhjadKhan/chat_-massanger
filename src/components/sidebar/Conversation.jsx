import React from 'react'
import userAvter from '../../assets/user.png'

const Conversation = () => {
  return (
    <>
    <div
      className='flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer'>
      <div className='avter online'>
        <div className="w-12 rounded-full">
          <img src={userAvter} alt="" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-slate-700">Amjad</p>
          <span>just now</span>
        </div>
      </div>
    </div>

   
  </>
  )
}

export default Conversation
