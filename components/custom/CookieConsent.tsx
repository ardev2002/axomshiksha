"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 3 }}
          className="fixed bottom-4 left-4 w-[90%] sm:w-[350px]
                     bg-background text-foreground p-4 rounded-lg border shadow-sm z-50
                     backdrop-blur-md border-border"
        >
          <p className="text-sm leading-relaxed">
            We use cookies to enhance your browsing experience and show
            personalized content. By continuing, you agree to our{" "}
            <Link
              target="_blank"
              href="/privacy"
              className="text-blue-500 underline hover:opacity-90 transition-opacity"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 hover:cursor-pointer rounded-2xl text-xs bg-muted hover:opacity-80 transition-opacity"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 hover:cursor-pointer rounded-2xl text-xs bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
