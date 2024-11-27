export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8 sm:p-20">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Website Under Construction
      </h1>
      <p className="text-lg sm:text-xl text-gray-700">
        Thank you for visiting! We’re working hard to bring something amazing.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-600">
          Email:{" "}
          <a
            href="mailto:contact@mahabub.me"
            className="text-blue-600 underline"
          >
            contact@mahabub.me
          </a>
        </p>
        <p className="text-gray-600">
          Phone:{" "}
          <a href="tel:+01711852202" className="text-blue-600 underline">
            01711852202
          </a>
        </p>
      </div>
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Mahabub Hossain. All rights reserved.
      </footer>
    </div>
  );
}
