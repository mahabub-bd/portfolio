"use client";

import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { LogInIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
export default function AuthButton() {
  const token = Cookies.get("accessToken");
  const { logout } = useAuth();

  return (
    <>
      {token ? (
        <Button
          onClick={logout}
          className="flex items-center gap-2 bg-red-600 text-white rounded-md px-5 py-1"
        >
          Logout
          <LogOutIcon />
        </Button>
      ) : (
        <Link
          href="/auth/login"
          className="flex items-center gap-2 bg-black text-gray-50 rounded-md px-5 py-1"
        >
          Login
          <LogInIcon />
        </Link>
      )}
    </>
  );
}
