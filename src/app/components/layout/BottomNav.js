"use client";

import Link from "next/link";
import { useActiveTab } from "../../hooks/useActiveTab";

const navItems = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
            </svg>
        ),
        label: "Home",
        href: "/",
        key: "home",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z" />
            </svg>
        ),
        label: "Services",
        href: "/services",
        key: "services",
    },
    {
        icon: (
            // Templates icon: 3 stacked rectangles
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <rect x="40" y="56" width="176" height="40" rx="8" />
                <rect x="56" y="104" width="144" height="40" rx="8" />
                <rect x="72" y="152" width="112" height="40" rx="8" />
            </svg>
        ),
        label: "Templates",
        href: "/templates",
        key: "templates",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M192,72H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48,48,0,0,0,192,72ZM171,207.89l0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z" />
            </svg>
        ),
        label: "Testimonials",
        href: "/testimonials",
        key: "testimonials",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
            >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
            </svg>
        ),
        label: "Contact",
        href: "/contact",
        key: "contact",
    },
];

export default function BottomNav() {
  const activeTab = useActiveTab();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#fcfbf8] border-t border-[#f4f0e6] safe-area-pb">
      <div className="flex gap-1 px-4 pb-2 pt-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.key;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-1 transition-all duration-200 rounded-lg p-2 ${
                isActive
                  ? "text-[#1d180c] bg-[#f4f0e6] scale-105"
                  : "text-[#a18745] hover:text-[#1d180c] hover:bg-[#f4f0e6]/50 active:scale-95"
              }`}
            >
              <div className="flex h-6 items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-medium leading-normal tracking-[0.015em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
