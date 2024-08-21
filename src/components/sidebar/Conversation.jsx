import React from "react";
import userAvter from "../../assets/user.png"; 
import useConversation from "../../zustend/useConversation"; 
import { useSocketContext } from "../../contex/SocketContext";

// Conversation component to display individual conversation items
const Conversation = ({ conversation, lastIndex }) => {
  // Destructure selectedConversation and setSelectedConversation from the Zustand store
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Check if the current conversation is the selected one
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext()

  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      <div
        // Apply styles and handle click to set the selected conversation
        className={`flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Display user image */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic || userAvter} alt="User Avatar" />
          </div>
        </div>

        {/* Display username */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-700">{conversation.username}</p>
          </div>
        </div>
      </div>

      {/* Render a divider if it's not the last item in the list */}
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
