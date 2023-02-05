import React from "react";
import Link from "next/link";

export function TableOfContents({ toc }) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav className="padding-2 sticky top-[60px] flex h-[calc(100vh-60px)] basis-1/6 overflow-y-auto border-l border-gray-200 pt-2">
      <ul className="flex flex-col">
        <span className="px-4 text-sm font-bold">ON THIS PAGE</span>
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== "undefined" && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                "border-l border-gray-200 pl-4",
                active ? "border-gray-400" : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Link href={href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
