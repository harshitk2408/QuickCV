"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchBarContent() {
  const searchParams = useSearchParams();
  const data = searchParams.get('jsonData');
  return (
    <section className="w-full bg-black p-[0] h-full text-white pt-[6%]">
      <pre>{data}</pre>
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
