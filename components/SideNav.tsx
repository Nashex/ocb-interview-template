import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const items = [
  {
    title: "Instructions",
    links: [
      { href: "/docs/markdoc", children: "Markdoc" },
      { href: "/docs/nextjs", children: "NextJs" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="padding-2 sticky top-[60px] h-[calc(100vh-60px)] flex-[0_0_auto] basis-1/6 overflow-y-auto border-r border-gray-200 pt-2">
      {items.map((item) => (
        <div key={item.title}>
          <span className="p-4 text-xl">{item.title}</span>
          <ul className="flex flex-col">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li
                  key={link.href}
                  className={[
                    active ? "font-bold" : "font-normal",
                    "px-4 pl-6 text-lg",
                  ].join(" ")}
                >
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
