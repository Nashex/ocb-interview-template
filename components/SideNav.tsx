import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const items = [
  {
    title: "Instructions",
    links: [
      { href: "/", children: "Home" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="padding-2 sticky top-[60px] h-[calc(100vh-60px)] flex-[0_0_auto] basis-1/6 overflow-y-auto border-r border-slate-300 pt-2">
      {items.map((item) => (
        <div key={item.title}>
          <span className="p-4 text-sm font-bold">{item.title.toUpperCase()}</span>
          <ul className="flex flex-col">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li
                  key={link.href}
                  className={[
                    active ? "text-slate-600" : "font-normal",
                    "px-4 text-xl",
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
