import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebaseClient";

export async function sendResetEmail(email: string, lang: string) {
  const auth = getAuth(app);

  try {
    await auth.sendPasswordResetEmail(email, {
      url: "https://streamswift.app/reset-password", // your reset page
      handleCodeInApp: true,
      locale: lang, // 'en', 'fr', 'es', 'de', etc.
    });
    console.log("Password reset email sent!");
  } catch (err) {
    console.error("Error sending reset email:", err);
  }
}