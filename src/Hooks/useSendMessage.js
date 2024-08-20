import { useState } from "react";
import useConversation from "../zustend/useConversation"; 
import toast from "react-hot-toast"; 

const useSendMessage = () => {
  // Local state to manage loading status during the message sending process
  const [loading, setLoading] = useState(false);

  // Destructure messages, setMessages, and selectedConversation from the Zustand store
  const { messages, setMessages, selectedConversation } = useConversation();

  // Function to send a message to the server
  const sendMessage = async (message) => {
    try {
      setLoading(true); // Set loading to true when sending starts

      // Send a POST request to the server to send the message
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }), 
        }
      );

      const data = await res.json(); // Parse the server response

      if (data.error) {
        throw new Error(data.error); 
      }

      // Update the messages state with the newly sent message
      setMessages([...messages, data]);
    } catch (error) {
      
      toast.error(error.message);
    } finally {
      setLoading(false); 
    }
  };

  // Return the sendMessage function and loading state from the hook
  return { sendMessage, loading };
};

export default useSendMessage;
