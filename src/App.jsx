// Import necessary components and libraries
import { Routes, Route, Navigate } from "react-router-dom" // For defining routes and navigation
import Home from "./pages/Home"  
import Login from "./pages/Login" 
import Signup from "./pages/Signup" 
import { Toaster } from "react-hot-toast" 
import { useAuthContext } from "./contex/AuthContext" 


const App = () => {
  const { authUser } = useAuthContext() // Access the authenticated user from context

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        {/* Home route, redirects to login if the user is not authenticated */}
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        {/* Login route, redirects to home if the user is already authenticated */}
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        {/* Signup route, redirects to home if the user is already authenticated */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
      <Toaster /> {/* Display toast notifications */}
    </div>
  )
}

export default App 
