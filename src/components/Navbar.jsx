/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3u57Cjq0U53
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
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
