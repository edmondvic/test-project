// web/lib/firebaseClient.ts
import { app } from "./firebase";
import {
  getAuth,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";

export const auth = getAuth(app);

// Send reset link
export async function sendReset(email: string) {
  return await sendPasswordResetEmail(auth, email);
}

// Verify code from email link
export async function verifyResetCode(oobCode: string) {
  return await verifyPasswordResetCode(auth, oobCode);
}

// Confirm and set new password
export async function confirmReset(oobCode: string, newPassword: string) {
  return await confirmPasswordReset(auth, oobCode, newPassword);
}