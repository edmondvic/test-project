"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="StreamSwift Logo"
            width={38}
            height={38}
          />
          <span className="text-2xl font-bold text-blue-600">StreamSwift</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium">

          <Link href="#home">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Open App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/dashboard"
            className="block bg-blue-600 text-white text-center py-2 rounded-md"
          >
            Open App
          </Link>
        </div>
      )}
    </nav>
  );
}