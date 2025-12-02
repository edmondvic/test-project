import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

// -------------------------------
// MULTILINGUAL TEXTS
// -------------------------------

const messages: Record<string, any> = {
  en: {
    title: "Subscription Activated!",
    message: "Your payment was successful.",
    planLabel: "Plan:",
    billing: "Next Billing Date:",
    btn: "Open StreamSwift",
  },
  fr: {
    title: "Abonnement Activé !",
    message: "Votre paiement a été effectué avec succès.",
    planLabel: "Forfait :",
    billing: "Prochaine date de facturation :",
    btn: "Ouvrir StreamSwift",
  },
  es: {
    title: "¡Suscripción Activada!",
    message: "Tu pago se realizó correctamente.",
    planLabel: "Plan:",
    billing: "Próxima fecha de pago:",
    btn: "Abrir StreamSwift",
  },
  ar: {
    title: "تم تفعيل الاشتراك!",
    message: "تمت عملية الدفع بنجاح.",
    planLabel: "الخطة:",
    billing: "تاريخ الفوترة القادم:",
    btn: "فتح StreamSwift",
  },
  hi: {
    title: "सदस्यता सक्रिय हो गई!",
    message: "आपका भुगतान सफल रहा।",
    planLabel: "प्लान:",
    billing: "अगली बिलिंग तिथि:",
    btn: "StreamSwift खोलें",
  },
  zh: {
    title: "订阅已激活！",
    message: "您的付款已成功。",
    planLabel: "套餐：",
    billing: "下一个扣费日期：",
    btn: "打开 StreamSwift",
  },
  pt: {
    title: "Assinatura Ativada!",
    message: "Seu pagamento foi realizado com sucesso.",
    planLabel: "Plano:",
    billing: "Próxima data de cobrança:",
    btn: "Abrir StreamSwift",
  },
  de: {
    title: "Abonnement aktiviert!",
    message: "Ihre Zahlung war erfolgreich.",
    planLabel: "Plan:",
    billing: "Nächstes Abrechnungsdatum:",
    btn: "StreamSwift öffnen",
  },
};

// Auto-detect language
function getLang(searchParams: any): string {
  const lang = searchParams.get("lang");
  if (lang && messages[lang]) return lang;

  if (typeof navigator !== "undefined") {
    const n = navigator.language.slice(0, 2);
    if (messages[n]) return n;
  }

  return "en";
}

// -------------------------------
// SERVER COMPONENT
// -------------------------------

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string; lang?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) redirect("/");

  // Fetch Stripe session
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const customerName = session.customer_details?.name || "";
  const plan =
    (session.metadata?.planName as string) ||
    session.display_items?.[0]?.custom?.name ||
    "Premium";

  const nextBilling =
    session.subscription &&
    (
      await stripe.subscriptions.retrieve(
        session.subscription as string
      )
    ).current_period_end;

  const lang = getLang(new URLSearchParams(searchParams));

  const t = messages[lang] || messages.en;

  const isRTL = lang === "ar";

  return (
    <div
      className={`min-h-screen flex items-center justify-center
      px-6 py-12 ${isRTL ? "text-right" : "text-left"}`}
    >
      <div
        className="w-full max-w-xl bg-white shadow-2xl rounded-2xl
        p-10 border border-gray-200"
      >
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          {t.title}
        </h1>

        <p className="text-gray-700 mb-6 text-lg">
          {t.message}
        </p>

        <div className="bg-gray-100 p-6 rounded-xl mb-6">
          <p className="text-gray-700 mb-3">
            <span className="font-semibold">{t.planLabel}</span>{" "}
            {plan}
          </p>

          {nextBilling && (
            <p className="text-gray-700">
              <span className="font-semibold">
                {t.billing}
              </span>{" "}
              {new Date(nextBilling * 1000).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className={isRTL ? "text-right" : "text-left"}>
          <a
            href="/"
            className="bg-green-600 text-white px-8 py-3 rounded-lg
            hover:bg-green-700 text-lg font-medium"
          >
            {t.btn}
          </a>
        </div>
      </div>
    </div>
  );
}