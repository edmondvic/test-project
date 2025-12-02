export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gray-50 px-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-10
                      text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          Your subscription was not completed.
        </p>

        <a
          className="bg-red-600 text-white px-8 py-3 rounded-lg
                     hover:bg-red-700"
          href="/pricing"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}