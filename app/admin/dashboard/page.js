'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancedDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('logs');
  const [newPassword, setNewPassword] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('/api/admin/inquiries');
    if (res.status === 401) router.push('/login');
    const data = await res.json();
    if (data.success) setInquiries(data.data);
    setLoading(false);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/update-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: newPassword }),
    });
    if (res.ok) alert('Security Credentials Updated Successfully.');
  };

  const exportData = () => {
    const header = 'Name,Email,Service Category,Message,Date';
    const rows = inquiries.map((i) =>
      `"${i.name}","${i.email}","${i.serviceCategory || ''}","${i.message}","${new Date(i.createdAt).toLocaleString()}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [header, ...rows].join('\n');
    window.open(encodeURI(csvContent));
  };

  const todayCount = inquiries.filter((i) => {
    const d = new Date(i.createdAt);
    const now = new Date();
    return (
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate()
    );
  }).length;

  const toggleRow = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="flex min-h-screen bg-[#0a0c10] text-slate-300 font-sans">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-[#0f1218] border-r border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
          <h1 className="text-lg font-black text-white uppercase tracking-tighter">
            Cognivix <span className="text-red-600">Admin</span>
          </h1>
        </div>

        <nav className="flex-grow p-4 space-y-1">
          <button
            onClick={() => setActiveTab('logs')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition ${
              activeTab === 'logs' ? 'bg-red-600 text-white' : 'hover:bg-slate-800 text-slate-500'
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition ${
              activeTab === 'security' ? 'bg-red-600 text-white' : 'hover:bg-slate-800 text-slate-500'
            }`}
          >
            Access Control
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => router.push('/login')}
            className="w-full bg-slate-800 hover:bg-red-900/60 p-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition text-slate-400 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto min-w-0">
        <header className="flex flex-wrap gap-4 justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-1">Dashboard</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Administrator</p>
          </div>
          <button
            onClick={exportData}
            className="bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest text-white transition"
          >
            Export CSV
          </button>
        </header>

        {activeTab === 'logs' ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0f1218] p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Total Leads</p>
                <p className="text-3xl font-black text-white">{inquiries.length}</p>
              </div>
              <div className="bg-[#0f1218] p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">New Today</p>
                <p className="text-3xl font-black text-red-500">{todayCount}</p>
              </div>
              <div className="col-span-2 md:col-span-1 bg-[#0f1218] p-6 rounded-2xl border border-slate-800 border-l-4 border-l-green-500">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Status</p>
                <p className="text-3xl font-black text-green-500">Live</p>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-[#0f1218] rounded-2xl border border-slate-800 overflow-hidden">
              {loading ? (
                <p className="p-10 text-slate-500 text-center font-bold uppercase tracking-widest text-xs">
                  Loading...
                </p>
              ) : inquiries.length === 0 ? (
                <p className="p-10 text-slate-500 text-center font-bold uppercase tracking-widest text-xs">
                  No leads yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead className="bg-slate-900/60">
                      <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                        <th className="px-5 py-4">Name</th>
                        <th className="px-5 py-4">Email</th>
                        <th className="px-5 py-4">Sector</th>
                        <th className="px-5 py-4">Message</th>
                        <th className="px-5 py-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {inquiries.map((iq) => (
                        <>
                          <tr
                            key={iq._id}
                            onClick={() => toggleRow(iq._id)}
                            className="hover:bg-white/[0.03] transition cursor-pointer select-none"
                          >
                            <td className="px-5 py-4 text-white font-bold whitespace-nowrap">{iq.name}</td>
                            <td className="px-5 py-4 text-red-400 font-mono text-xs whitespace-nowrap">{iq.email}</td>
                            <td className="px-5 py-4 whitespace-nowrap">
                              <span className="bg-red-600/10 text-red-400 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-red-600/20">
                                {iq.serviceCategory || '—'}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-slate-500 text-xs max-w-[220px] truncate">
                              {iq.message}
                            </td>
                            <td className="px-5 py-4 text-slate-500 text-xs font-mono whitespace-nowrap">
                              {new Date(iq.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </td>
                          </tr>

                          {expandedId === iq._id && (
                            <tr key={`${iq._id}-expanded`} className="bg-slate-900/40">
                              <td colSpan={5} className="px-5 py-5">
                                <div className="flex gap-3 items-start">
                                  <div className="w-1 self-stretch bg-red-600 rounded-full shrink-0" />
                                  <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                      Full Message — {iq.name}
                                    </p>
                                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                      {iq.message}
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="max-w-md bg-[#0f1218] p-10 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Update Password</h3>
            <form onSubmit={updatePassword} className="space-y-5">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="Enter new password..."
                />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest transition text-xs">
                Update Password
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
