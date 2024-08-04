import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickCV",
  description: "Generate CV in seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-[100%]">
      <script
        async
        src="node_modules/@material-tailwind/html/scripts/ripple.js"
      ></script>

      <script
        async
        src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"
      ></script>
      <body className={`${inter.className} h-[100%]`}>
      <Navbar />
      <div className="h-[100%]">
        {children}
      </div>
      <Analytics />
      </body>
    </html>
  );
}
