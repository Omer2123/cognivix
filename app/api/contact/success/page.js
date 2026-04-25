// app/contact/success/page.js
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl text-center border-t-8 border-red-600">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h1>
        <p className="text-gray-600 mb-8">
          Thank you for reaching out to Cognivix IT Solutions Solutions. One of our GovCon experts will review your request and contact you within 24 hours.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}