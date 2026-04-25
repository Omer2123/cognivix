'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancedDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('logs');
  const [newPassword, setNewPassword] = useState('');
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
    return d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate();
  }).length;

  return (
    <div className="flex min-h-screen bg-[#0a0c10] text-slate-300 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0f1218] border-r border-slate-800 flex flex-col">
        <div className="p-8 border-b border-slate-800 flex items-center gap-3">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
          <h1 className="text-xl font-black text-white uppercase tracking-tighter">CyberX <span className="text-red-600">HQ</span></h1>
        </div>

        <nav className="flex-grow p-6 space-y-2">
          <button
            onClick={() => setActiveTab('logs')}
            className={`w-full text-left p-4 rounded-xl font-bold text-xs uppercase tracking-widest transition ${activeTab === 'logs' ? 'bg-red-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-500'}`}
          >
            Mission Logs
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full text-left p-4 rounded-xl font-bold text-xs uppercase tracking-widest transition ${activeTab === 'security' ? 'bg-red-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-500'}`}
          >
            Access Control
          </button>
        </nav>

        <div className="p-6 border-t border-slate-800">
          <button
            onClick={() => router.push('/login')}
            className="w-full bg-slate-800 hover:bg-red-900 p-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition"
          >
            Terminate Uplink
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-2">Command Center</h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Authenticated Session: Administrator</p>
          </div>
          <button
            onClick={exportData}
            className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest text-white transition"
          >
            Export Intel (CSV)
          </button>
        </header>

        {activeTab === 'logs' ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#0f1218] p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Total Leads</p>
                <p className="text-4xl font-black text-white">{inquiries.length}</p>
              </div>
              <div className="bg-[#0f1218] p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">New Today</p>
                <p className="text-4xl font-black text-red-500">{todayCount}</p>
              </div>
              <div className="bg-[#0f1218] p-8 rounded-3xl border-l-4 border-l-red-600 border border-slate-800 shadow-2xl">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Secure Link</p>
                <p className="text-4xl font-black text-green-500 italic">Active</p>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-[#0f1218] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
              {loading ? (
                <p className="p-10 text-slate-500 text-center font-bold uppercase tracking-widest text-xs">Loading intel...</p>
              ) : inquiries.length === 0 ? (
                <p className="p-10 text-slate-500 text-center font-bold uppercase tracking-widest text-xs">No leads received yet.</p>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-900/50">
                    <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                      <th className="p-6">Name</th>
                      <th className="p-6">Email</th>
                      <th className="p-6">Sector</th>
                      <th className="p-6">Message</th>
                      <th className="p-6">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {inquiries.map((iq) => (
                      <tr key={iq._id} className="hover:bg-white/[0.02] transition">
                        <td className="p-6 text-white font-black uppercase tracking-tighter whitespace-nowrap">{iq.name}</td>
                        <td className="p-6 text-red-500 font-bold font-mono text-xs whitespace-nowrap">{iq.email}</td>
                        <td className="p-6">
                          <span className="bg-red-600/10 text-red-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-red-600/20 whitespace-nowrap">
                            {iq.serviceCategory || '—'}
                          </span>
                        </td>
                        <td className="p-6 text-slate-400 text-sm italic max-w-xs truncate">"{iq.message}"</td>
                        <td className="p-6 text-slate-500 text-xs font-mono whitespace-nowrap">
                          {new Date(iq.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        ) : (
          <div className="max-w-xl bg-[#0f1218] p-12 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Update Access Key</h3>
            <form onSubmit={updatePassword} className="space-y-6">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">New Secure Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="Enter New Admin Key..."
                />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest transition">
                Apply New Protocol
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
