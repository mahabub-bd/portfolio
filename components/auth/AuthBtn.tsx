import { useAuth } from "@/hooks/useAuth"; // Replace with the actual path to your useAuth hook
import { LogInIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";

export default function AuthButton() {
  const { logout, user } = useAuth();

  return (
    <>
      {user?.token ? (
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-600 text-white rounded-md px-5 py-1"
        >
          Logout
          <LogOutIcon />
        </button>
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
