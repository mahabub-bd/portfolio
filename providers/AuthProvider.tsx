"use client";
import { AuthContext } from "@/contexts";
import { User } from "@/types";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { FC, ReactNode, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
    Cookies.remove("accessToken");
    redirect("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
