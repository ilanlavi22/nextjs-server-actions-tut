"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/constants";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar mx-auto max-w-6xl flex-col justify-between px-8 sm:flex-row">
        <Link href="/" className="btn btn-primary uppercase">
          Next.js
        </Link>

        <ul className="menu menu-horizontal gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${pathname === link.href && "active"} capitalize`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
