import Link from "next/link"

export function Navbar() {
  return (
    (<header
      className="bg-black text-white py-4 px-6 flex justify-between items-center fixed w-[100%] z-10">
      <Link className="flex items-center" href="/">
        <span className="text-2xl font-bold">QuickC</span>
        <span className="text-2xl font-bold rotate-[-90deg] inline-block">V</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="#"
          className="text-lg font-normal hover:text-gray-300 transition-colors"
          prefetch={false}>
          Templates
        </Link>
        <Link
          href="about"
          className="text-lg font-normal hover:text-gray-300 transition-colors"
          prefetch={false}>
          About
        </Link>
      </nav>
    </header>)
  );
}
