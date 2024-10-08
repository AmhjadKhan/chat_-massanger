import React, { useEffect, useContext } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustend/useConversation";
import { TiMessage } from "react-icons/ti";
import { AuthContext } from "../../contex/AuthContext";

const MessageContainer = () => {
  // Destructure selectedConversation and setSelectedConversation from the Zustand store
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  // Use useContext to get the current user information from AuthContext
  const { senderId } = useContext(AuthContext);
  const senderUsername = senderId?.username;
  console.log(senderUsername)

  // useEffect hook to reset the selected conversation when the component unmounts
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* Conditional rendering based on whether a conversation is selected */}
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex">
            {/* Header displaying the selected conversation's username */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To: </span>
              <span className="text-gray-900 font-bold">
                {selectedConversation?.username}
              </span>
            </div>

            {/* Header displaying the logged-in user's username */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">From: </span>
              <span className="text-gray-900 font-bold">
                {senderUsername}
              </span>
            </div>
          </div>

          {/* Display messages */}
          <Messages />

          {/* Input area for sending new messages */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

// Component to render when no chat is selected
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-slate-800 font-semibold flex flex-col items-center gap-2">
        <p>Welcome</p>
        <p>Select a chat to start messaging</p>
        <TiMessage className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
