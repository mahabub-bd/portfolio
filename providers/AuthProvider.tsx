"use client";
import { AuthContext } from "@/contexts";
import { User } from "@/types";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { ReactNode, useState } from "react";
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
    Cookies.remove("accessToken");
    redirect("/auth/login");
  };

  return (
    <AuthContext value={{ user, setUser, logout }}>{children}</AuthContext>
  );
};

export default AuthProvider;
