"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0/month",
      features: [
        "Up to 100MB per transfer",
        "2 transfers/day online",
        "Offline transfers unlimited",
        "Watermark on downloads",
      ],
      cta: "Get Started",
      bg: "bg-white",
      border: "border border-gray-200",
    },
    {
      name: "Basic",
      price: "$4.99/month",
      features: [
        "Up to 1GB per transfer",
        "No ads or watermark",
        "7-day file history",
      ],
      cta: "Subscribe",
      bg: "bg-blue-50",
      border: "border border-blue-200",
    },
    {
      name: "Pro",
      price: "$19.99/month",
      features: [
        "Up to 20GB per transfer",
        "1TB Cloud storage",
        "Priority support",
      ],
      cta: "Subscribe",
      bg: "bg-blue-100",
      border: "border border-blue-300",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 text-lg mb-12">
          Choose the plan that fits your needs — whether for casual use or enterprise-scale sharing.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl shadow-md hover:shadow-xl transition cursor-pointer ${plan.bg} ${plan.border}`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 text-gray-700 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}