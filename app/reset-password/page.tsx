"use client";

import { useEffect, useState } from "react";
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { app } from "@/lib/firebase";
import { sendResetEmail } from "@/lib/sendResetEmail";

type Language = "EN" | "DE" | "ES" | "FR" | "AR" | "HI" | "ZH" | "PT";

const translations: Record<Language, Record<string, string>> = {
  EN: {
    requestTitle: "Reset Password",
    requestDesc: "Enter your email and we'll send reset instructions",
    emailPlaceholder: "Email Address",
    sendButton: "Send Reset Instructions",
    emailSent: "Check your email for reset instructions",
    invalidCode: "This reset link is invalid or expired.",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    changeButton: "Change Password",
    passwordSuccess: "Password changed successfully!",
    backLogin: "Return to StreamSwift",
    passwordMismatch: "Passwords do not match",
    passwordShort: "Password must be at least 6 characters",
  },
  DE: {
    requestTitle: "Passwort zurücksetzen",
    requestDesc: "Geben Sie Ihre E-Mail ein, wir senden Anweisungen",
    emailPlaceholder: "E-Mail-Adresse",
    sendButton: "Anweisungen zum Zurücksetzen senden",
    emailSent: "Überprüfen Sie Ihre E-Mails auf Anweisungen",
    invalidCode: "Dieser Link ist ungültig oder abgelaufen.",
    newPassword: "Neues Passwort",
    confirmPassword: "Passwort bestätigen",
    changeButton: "Passwort ändern",
    passwordSuccess: "Passwort erfolgreich geändert!",
    backLogin: "Zurück zu StreamSwift",
    passwordMismatch: "Passwörter stimmen nicht überein",
    passwordShort: "Das Passwort muss mindestens 6 Zeichen haben",
  },
  ES: {
    requestTitle: "Restablecer contraseña",
    requestDesc: "Ingresa tu correo y enviaremos instrucciones",
    emailPlaceholder: "Correo electrónico",
    sendButton: "Enviar instrucciones",
    emailSent: "Revisa tu correo para instrucciones",
    invalidCode: "Este enlace de restablecimiento no es válido.",
    newPassword: "Nueva contraseña",
    confirmPassword: "Confirmar contraseña",
    changeButton: "Cambiar contraseña",
    passwordSuccess: "¡Contraseña cambiada con éxito!",
    backLogin: "Volver a StreamSwift",
    passwordMismatch: "Las contraseñas no coinciden",
    passwordShort: "La contraseña debe tener al menos 6 caracteres",
  },
  FR: {
    requestTitle: "Réinitialiser le mot de passe",
    requestDesc: "Entrez votre email pour recevoir les instructions",
    emailPlaceholder: "Adresse e-mail",
    sendButton: "Envoyer instructions",
    emailSent: "Vérifiez votre email pour les instructions",
    invalidCode: "Ce lien est invalide ou expiré.",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    changeButton: "Changer le mot de passe",
    passwordSuccess: "Mot de passe changé avec succès !",
    backLogin: "Retour à StreamSwift",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    passwordShort: "Le mot de passe doit comporter 6 caractères minimum",
  },
  AR: {
    requestTitle: "إعادة تعيين كلمة المرور",
    requestDesc: "أدخل بريدك الإلكتروني لإرسال التعليمات",
    emailPlaceholder: "البريد الإلكتروني",
    sendButton: "إرسال التعليمات",
    emailSent: "تحقق من بريدك الإلكتروني للتعليمات",
    invalidCode: "رابط إعادة التعيين غير صالح أو منتهي.",
    newPassword: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور",
    changeButton: "تغيير كلمة المرور",
    passwordSuccess: "تم تغيير كلمة المرور بنجاح!",
    backLogin: "العودة إلى StreamSwift",
    passwordMismatch: "كلمات المرور غير متطابقة",
    passwordShort: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
  },
  HI: {
    requestTitle: "पासवर्ड रीसेट करें",
    requestDesc: "अपना ईमेल दर्ज करें, हम निर्देश भेजेंगे",
    emailPlaceholder: "ईमेल पता",
    sendButton: "रीसेट निर्देश भेजें",
    emailSent: "रीसेट निर्देशों के लिए ईमेल चेक करें",
    invalidCode: "यह रीसेट लिंक अमान्य या समाप्त हो गया है।",
    newPassword: "नया पासवर्ड",
    confirmPassword: "पासवर्ड पुष्टि करें",
    changeButton: "पासवर्ड बदलें",
    passwordSuccess: "पासवर्ड सफलतापूर्वक बदल दिया गया!",
    backLogin: "StreamSwift पर वापस जाएं",
    passwordMismatch: "पासवर्ड मेल नहीं खाते",
    passwordShort: "पासवर्ड कम से कम 6 अक्षर का होना चाहिए",
  },
  ZH: {
    requestTitle: "重置密码",
    requestDesc: "输入您的邮箱，我们将发送重置说明",
    emailPlaceholder: "邮箱地址",
    sendButton: "发送重置说明",
    emailSent: "请检查您的邮箱获取说明",
    invalidCode: "此重置链接无效或已过期。",
    newPassword: "新密码",
    confirmPassword: "确认密码",
    changeButton: "更改密码",
    passwordSuccess: "密码修改成功！",
    backLogin: "返回 StreamSwift",
    passwordMismatch: "密码不匹配",
    passwordShort: "密码至少需要6个字符",
  },
  PT: {
    requestTitle: "Redefinir senha",
    requestDesc: "Digite seu email e enviaremos instruções",
    emailPlaceholder: "Endereço de e-mail",
    sendButton: "Enviar instruções",
    emailSent: "Verifique seu email para instruções",
    invalidCode: "Este link de redefinição é inválido ou expirou.",
    newPassword: "Nova senha",
    confirmPassword: "Confirmar senha",
    changeButton: "Alterar senha",
    passwordSuccess: "Senha alterada com sucesso!",
    backLogin: "Voltar para StreamSwift",
    passwordMismatch: "As senhas não correspondem",
    passwordShort: "A senha deve ter pelo menos 6 caracteres",
  },
};

export default function ResetPasswordPage() {
  const auth = getAuth(app);
  const [lang, setLang] = useState<Language>("EN");

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [oobCode, setOobCode] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Detect user browser language and set translation
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0].toUpperCase();
    if (["EN","DE","ES","FR","AR","HI","ZH","PT"].includes(browserLang)) {
      setLang(browserLang as Language);
    } else {
      setLang("EN");
    }
  }, []);

  // Read oobCode from URL for reset password
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("oobCode");
    if (code) {
      setOobCode(code);
      setLoading(true);
      verifyPasswordResetCode(auth, code)
        .then(() => setIsValid(true))
        .catch(() => setErrorMsg(translations[lang].invalidCode))
        .finally(() => setLoading(false));
    }
  }, [auth, lang]);

  const handleSendEmail = async () => {
    if (!email) return;
    setLoading(true);
    try {
      await sendResetEmail(email, lang);
      setEmailSent(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!oobCode) return;
    if (newPassword !== confirmPass) {
      setErrorMsg(translations[lang].passwordMismatch);
      return;
    }
    if (newPassword.length < 6) {
      setErrorMsg(translations[lang].passwordShort);
      return;
    }
    setLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccessMsg(translations[lang].passwordSuccess);
      setErrorMsg("");
      setIsValid(false);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );

  if (emailSent)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            {translations[lang].emailSent}
          </h1>
          <p className="text-gray-700 mb-6">{email}</p>
          <a
            href="/"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            {translations[lang].backLogin}
          </a>
        </div>
      </div>
    );

  if (successMsg)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            {successMsg}
          </h1>
          <a
            href="/"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            {translations[lang].backLogin}
          </a>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full">
        {!oobCode ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-4">
              {translations[lang].requestTitle}
            </h1>
            <p className="text-gray-700 text-center mb-6">
              {translations[lang].requestDesc}
            </p>
            <input
              type="email"
              placeholder={translations[lang].emailPlaceholder}
              className="w-full border rounded px-3 py-2 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}
            <button
              onClick={handleSendEmail}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {translations[lang].sendButton}
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center mb-4">
              {translations[lang].newPassword}
            </h1>
            <input
              type="password"
              placeholder={translations[lang].newPassword}
              className="w-full border rounded px-3 py-2 mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder={translations[lang].confirmPassword}
              className="w-full border rounded px-3 py-2 mb-4"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}
            <button
              onClick={handleResetPassword}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {translations[lang].changeButton}
            </button>
          </>
        )}
      </div>
    </div>
  );
}