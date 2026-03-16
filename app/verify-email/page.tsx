"use client";

import { useEffect, useState } from "react";
import { getAuth, applyActionCode } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function VerifyPage() {
  const auth = getAuth(app);
  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "invalid"
  >("loading");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const oobCode = params.get("oobCode");

    if (mode !== "verifyEmail" || !oobCode) {
      setStatus("invalid");
      return;
    }

    applyActionCode(auth, oobCode)
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }, [auth]);

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8
                      text-center">
        {status === "loading" && (
          <>
            <h1 className="text-2xl font-bold mb-3">
              Verifying your email…
            </h1>
            <p className="text-gray-600">
              Please wait while we complete verification.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-3xl font-bold text-green-600 mb-3">
              Email Verified!
            </h1>
            <p className="text-gray-700 mb-6">
              Your email has been successfully verified.
            </p>
            <a
              href="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg
                         hover:bg-green-700"
            >
              Open StreamSwift
            </a>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-3xl font-bold text-red-600 mb-3">
              Verification Failed
            </h1>
            <p className="text-gray-600">
              The verification link may have expired.
            </p>
          </>
        )}

        {status === "invalid" && (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-3">
              Invalid Link
            </h1>
            <p className="text-gray-600">
              This verification link is not valid.
            </p>
          </>
        )}
      </div>
    </div>
  );
}