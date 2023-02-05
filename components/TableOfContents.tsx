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
    <nav className="sticky top-[60px] h-[calc(100vh-60px)] flex overflow-y-auto padding-2 border-l border-gray-200 basis-1/6 pt-2">
      <ul className="flex flex-col">
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== "undefined" && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                "border-l border-gray-200 pl-4",
                active ? "border-gray-400" : "",
                item.level === 3 ? "text-md" : "text-lg",
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
