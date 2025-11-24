"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="StreamSwift Logo"
            width={38}
            height={38}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-blue-600">StreamSwift</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium items-center">
          <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
          <Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>

          <Link
            href="/dashboard"
            className="ml-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Open App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl font-bold focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="#home"
                className="block w-full py-3 px-4 rounded-lg hover:bg-blue-50 transition text-center font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#features"
                className="block w-full py-3 px-4 rounded-lg hover:bg-blue-50 transition text-center font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block w-full py-3 px-4 rounded-lg hover:bg-blue-50 transition text-center font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="block w-full py-3 px-4 rounded-lg hover:bg-blue-50 transition text-center font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/dashboard"
                className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition font-medium"
                onClick={() => setOpen(false)}
              >
                Open App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}