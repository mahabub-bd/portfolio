import Link from "next/link";
import { NavigationMenuDemo } from "./Navbar";

export default function Header() {
  return (
    <section className=" border-b-slate-100 border shadow-lg relative">
      <div className="container mx-auto py-5 sticky top-0 flex justify-between items-center">
        <NavigationMenuDemo />
        <Link
          className="bg-black text-gray-50 rounded-md px-5 py-1"
          href={"/auth/login"}
        >
          Login
        </Link>
      </div>
    </section>
  );
}
