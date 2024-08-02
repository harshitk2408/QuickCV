"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchBarContent() {
  const searchParams = useSearchParams();
  const data = searchParams.get('jsonData');
  return (
    <section className="w-full bg-black p-[0] min-h-full max-h-fit text-white py-[6%] px-[2%]">
      <h1 className='text-2xl font-extrabold mb-[1%]'>Note</h1>
      1. Unzip the &quot;Portfolio&quot; folder<br/>
      2. Copy this code and paste it in &quot;details.json&quot;<br/>
      <div className='mt-[1%]'><span className='text-1xl font-extrabold mb-[1%] mr-[1%]'>To view on local server  :  </span> Install dependencies using &quot;npm install&quot; </div>
      <pre className='mt-[4%]'>{data}</pre>
    </section>
  );
}

export default function SearchBar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchBarContent />
    </Suspense>
  );
}
