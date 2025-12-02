// web/lib/sendResetEmail.ts
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

export async function sendResetEmail(email: string, lang: string) {
  const auth = getAuth(app);

  try {
    await sendPasswordResetEmail(auth, email, {
      url: `https://streamswift.app/reset-password?lang=${lang}`,
      handleCodeInApp: true,
    });

    console.log("Password reset email sent!");
  } catch (err) {
    console.error("Error sending reset email:", err);
    throw err;
  }
}