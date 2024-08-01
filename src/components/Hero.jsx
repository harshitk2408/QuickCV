import Link from "next/link"
import { Pinyon_Script } from 'next/font/google';
import { Playfair_Display_SC } from 'next/font/google';
const play = Playfair_Display_SC({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})
const pin = Pinyon_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})
export default function Hero() {
  return (
    (<section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center custom-bg">
      <div className="container px-4 md:px-6 text-center space-y-4">
        <h1 className={`text-4xl md:text-6xl font-bold text-primary-foreground ${play.className}`}>
          <span className={pin.className}>Your </span> Dream  Portfolio<br/>Just  A <span className={pin.className}> Click </span>Away</h1>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <Link
          href="/#steps-cont"
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}>
          <ArrowDownIcon className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>)
  );
}

function ArrowDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>)
  );
}
