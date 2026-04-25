'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid Authorization Credentials');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <form onSubmit={handleLogin} className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-red-600">
        <h1 className="text-3xl font-black text-slate-900 uppercase mb-2 tracking-tighter text-center">Admin Access</h1>
        <p className="text-gray-500 text-center mb-8 text-sm uppercase font-bold tracking-widest">Secure Mission Control</p>
        
        <div className="space-y-6">
          <input
            type="password"
            placeholder="Enter Admin Key"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 outline-none text-slate-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-600 text-sm font-bold text-center">{error}</p>}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 uppercase transition-all shadow-lg active:scale-95">
            Authenticate
          </button>
        </div>
      </form>
    </main>
  );
}