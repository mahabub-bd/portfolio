import { NavigationMenuDemo } from "./Navbar";

export default function Header() {
  return (
    <section className=" border-b-slate-100 border shadow-lg relative">
      <div className="container mx-auto py-5 sticky top-0">
        <NavigationMenuDemo />
      </div>
    </section>
  );
}
