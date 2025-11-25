"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0/month",
      features: [
        "100 MB per transfer",
        "2 online transfers/day",
        "Unlimited offline transfers",
        "2 file translations/day",
        "Ads after transfers",
        "No cloud access or storage",
      ],
      cta: "Get Started",
      bg: "bg-white",
      border: "border border-gray-200",
    },
    {
      name: "Basic",
      price: "$4.99/month",
      features: [
        "Up to 1 GB per transfer",
        "Unlimited file translations",
        "No ads",
        "Standard compression",
        "7-day file history",
        "200 GB cloud storage",
      ],
      cta: "Subscribe",
      bg: "bg-blue-50",
      border: "border border-blue-200",
    },
    {
      name: "Standard",
      price: "$9.99/month",
      features: [
        "Up to 5 GB per transfer",
        "Unlimited file translations",
        "High-efficiency compression",
        "30-day file history",
        "500 GB cloud storage",
      ],
      cta: "Subscribe",
      bg: "bg-blue-100",
      border: "border border-blue-300",
    },
    {
      name: "Premium",
      price: "$19.99/month",
      features: [
        "20 GB per transfer",
        "Unlimited file translations",
        "1 TB cloud storage",
        "Analytics dashboard",
        "Priority support",
      ],
      cta: "Subscribe",
      bg: "bg-blue-200",
      border: "border border-blue-400",
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "$49.99/seat",
      features: [
        "Unlimited file transfer & translations",
        "Unlimited cloud storage",
        "Custom branding",
        "Dedicated manager",
        "SSO & SLA",
        "Team billing & controls",
      ],
      cta: "Contact Sales",
      bg: "bg-gray-100",
      border: "border border-gray-300",
      badge: "Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 text-lg mb-12">
          Choose the plan that fits your needs — whether for casual use, professional growth, or enterprise-scale sharing.
        </p>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl shadow-md hover:shadow-xl transition cursor-pointer ${plan.bg} ${plan.border}`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 mt-4 mr-4 px-3 py-1 rounded-full bg-yellow-400 text-white text-sm font-semibold">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 text-gray-700 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full transition ${plan.name === "Enterprise" ? "bg-green-600 hover:bg-green-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}