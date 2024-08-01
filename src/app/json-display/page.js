"use client"; 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
  const data = searchParams.get('jsonData');
  return (
    <section className="w-full bg-black p-[0] h-full text-white pt-[6%]">
      <pre>{data}</pre>
    </section>
  );
};
