import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-black">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login to
          <span className="text-blue-500"> Chat Messenger</span>
        </h1>

        <form>
          <div>
            <label className="block text-sm font-medium text-white mt-4">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
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
            />
          </div>

          <Link
            to="/signup"
            className="block text-sm font-medium text-blue-500 hover:underline mt-4"
          >
            {"Don't"} have an account?
          </Link>

          <button
            className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
