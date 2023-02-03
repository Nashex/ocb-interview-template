import React from "react";
import Link from "next/link";

export function TopNav({ children }) {
  return (
    <nav className="fixed top-0 z-50 flex h-[60px] w-full items-center justify-between gap-1 border-b border-gray-200 bg-white px-4 py-1">
      <Link href="/" className="flex text-3xl font-bold font-sans">
        OCB Interview
      </Link>
      <section className="flex gap-1 p-0 text-xl">{children}</section>
    </nav>
  );
}
