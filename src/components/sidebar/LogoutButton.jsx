import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";

export const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto flex flex-col items-center">
      {!loading ? (
        <div className="flex flex-col items-center cursor-pointer" onClick={logout}>
          <BiLogOut className="w-6 h-6 text-red-500" />
          <span className="text-xs text-red-500 mt-1">LOGOUT</span>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
