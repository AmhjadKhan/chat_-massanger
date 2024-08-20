import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // console.log(email, password)

  const { login, loading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-black">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login to
          <span className="text-blue-500"> Chat Messenger</span>
        </h1>

        <form onClick={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="block text-sm font-medium text-blue-500 hover:underline mt-4"
          >
            {"Don't"} have an account?
          </Link>

          <button
              className="btn btn-block btn-sm mt-2 bg-blue-700 font-bold text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
