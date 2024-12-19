"use client";
import { User } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
