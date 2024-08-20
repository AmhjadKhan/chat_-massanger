import React from 'react';
import Conversation from './Conversation'; 
import useGetConversations from '../../Hooks/useGetConversations'; 
const Conversations = () => {
  // Destructure loading state and conversations data from the custom hook
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id} 
          conversation={conversation} // Pass conversation data as a prop
          lastIndex={index === conversation.length - 1} // Check if it's the last conversation
        />
      ))}

      {/* Show a loading spinner if data is still being fetched */}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
