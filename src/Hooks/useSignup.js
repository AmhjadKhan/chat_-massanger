// Import necessary libraries and hooks
import toast from "react-hot-toast" 
import { useAuthContext } from "../contex/AuthContext" 
import { useState } from "react" 

// Function to handle input validation errors
const handleInputErrors = ({
  username,
  email,
  password,
  confirmPassword,
  gender,
}) => {
  // Check if all required fields are filled
  if (!username || !email || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields") // Display error message if any field is missing
    return true
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    toast.error("Password do not match") // Display error message if passwords do not match
    return true
  }

  return false // No errors found
}

// Custom hook for handling signup logic
const useSignup = () => {
  const [loading, setLoading] = useState(false) // State to track loading status
  const { setAuthUser } = useAuthContext() // Access function to set authenticated user

  // Function to handle signup process
  const signup = async ({
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const checkError = handleInputErrors({
      username,
      email,
      password,
      confirmPassword,
      gender,
    }) // Validate input fields

    if (checkError) {
      return // Exit if there are validation errors
    }

    try {
      setLoading(true) // Set loading state to true

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          gender,
        }), // Send signup data to the server
      })

      const data = await res.json() // Parse server response

      if (data.error) {
        throw new Error(data.error) // Throw error if server response contains an error
      }

      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(data))

      setAuthUser(data) // Set authenticated user in context
    } catch (error) {
      toast.error(error.message) // Display error message
    } finally {
      setLoading(false) // Set loading state to false
    }
  }

  return { loading, signup } // Return loading state and signup function
}

export default useSignup // Export custom hook
