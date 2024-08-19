import React from 'react'
import userAvater from '../../assets/user.png'

const Message = () => {
  return (
    <div className={"chat chat-end"}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img src={userAvater} alt="User Avatar" />
      </div>
    </div>

    <div className={"chat-bubble text-white"}>
      Hellow
    </div>

    <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950">
      time
    </div>
  </div>
  )
}

export default Message
