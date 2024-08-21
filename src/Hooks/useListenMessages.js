import { useEffect } from "react"
import { useSocketContext } from "../contex/SocketContext"
import useConversation from "../zustend/useConversation"



const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()
  
    //   console.log(messages);
  
    useEffect(() => {
      socket?.on("newMessage", (newMessage) => {
        const sound = new Audio(notificationSound)
        sound.play()
  
        setMessages([...messages, newMessage])
      })
  
      return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
  }
  
  export default useListenMessages