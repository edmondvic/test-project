"use client";

import { motion } from "framer-motion";
import { FaBolt, FaWifi, FaLock, FaCloudUploadAlt, FaQrcode, FaMobileAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBolt size={35} className="text-blue-600" />,
      title: "Ultra-Fast Sharing",
      text: "Send and receive videos, music, documents, and large files online & offline within seconds with optimized compression.",
    },
    {
      icon: <FaWifi size={35} className="text-blue-600" />,
      title: "Offline Mode",
      text: "Share files instantly without internet using Wi-Fi Direct — works anywhere.",
    },
    {
      icon: <FaLock size={35} className="text-blue-600" />,
      title: "Secure Transfers",
      text: "End-to-end encryption keeps your files safe and protected.",
    },
    {
      icon: <FaCloudUploadAlt size={35} className="text-blue-600" />,
      title: "Cloud Storage",
      text: "Backup, store, and access your files anytime using StreamSwift Cloud.",
    },
    {
      icon: <FaLanguage size={35} className="text-blue-600" />,
      title: "QR & Unique Code Connect",
      text: "AI-powered multilingual translation for media and documents.",
    },
    {
      icon: <FaMobileAlt size={35} className="text-blue-600" />,
      title: "Cross-Platform",
      text: "Available on Android, iOS, Windows, and Mac.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Everything you need for fast, secure, and seamless file sharing — online and offline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-blue-50 rounded-3xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}