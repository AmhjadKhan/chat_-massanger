// Import the `create` function from Zustand, a state management library
import { create } from "zustand";

// Create a Zustand store for managing conversation state
const useConversation = create((set) => ({
  // State for storing the currently selected conversation
  selectedConversation: null,

  // Function to update the selected conversation in the state
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  // State for storing messages related to the selected conversation
  messages: [],

  // Function to update the messages in the state
  setMessages: (messages) => set({ messages }),
}));

// Export the Zustand store to be used in other components
export default useConversation;
