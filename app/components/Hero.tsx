"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            The Fastest Way to <br />
            <span className="text-blue-600">Share Any File</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            StreamSwift makes file sharing effortless — send videos, music, docs,
            and large files within seconds using online or offline technology.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition"
            >
              Open App
            </a>

            <a
              href="#features"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition"
            >
              How It Works
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 blur-3xl opacity-30 rounded-full"></div>

          <div className="shadow-xl rounded-3xl overflow-hidden">
            <Image
              src="/hero-image.png"
              alt="StreamSwift File Transfer"
              width={650}
              height={650}
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}