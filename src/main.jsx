import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contex/AuthContext.jsx";
import { SocketContextProvider } from "./contex/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
);
