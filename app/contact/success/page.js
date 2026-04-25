import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl text-center shadow-2xl border-t-8 border-red-600">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter">
          Inquiry Secured
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Your mission requirements have been received. A federal capture expert will review your inquiry and contact you within 24 hours.
        </p>

        {/* Return Button */}
        <Link 
          href="/" 
          className="inline-block w-full bg-red-600 text-white font-black px-8 py-4 rounded uppercase hover:bg-red-700 transition-all shadow-lg active:scale-95"
        >
          Return to HQ
        </Link>
      </div>
    </main>
  );
}