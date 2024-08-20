
import { useState } from "react";
import { BsSend } from "react-icons/bs"; 
import useSendMessage from "../../Hooks/useSendMessage"; 
const MessageInput = () => {
  // Local state to manage the message input
  const [message, setMessage] = useState("");

  // Destructure loading state and sendMessage function from the custom hook
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent sending if the message is empty
    if (!message) {
      return;
    }

    // Send the message and reset the input field
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        {/* Input field for typing the message */}
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Submit button with loading spinner or send icon */}
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div> 
          ) : (
            <BsSend /> 
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
