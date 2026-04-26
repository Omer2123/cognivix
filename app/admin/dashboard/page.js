'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancedDashboard() {
  const [sectors, setSectors] = useState([]);
  const [newSectorName, setNewSectorName] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('/api/admin/inquiries');
    if (res.status === 401) router.push('/login');
    const data = await res.json();
    if (data.success) setInquiries(data.data);

    const sectorsRes = await fetch('/api/admin/sectors');
    const sectorsData = await sectorsRes.json();
    if (sectorsData.success) setSectors(sectorsData.data);

    setLoading(false);
  };

  const addSector = async (e) => {
    e.preventDefault();
    if (!newSectorName) return;
    const res = await fetch('/api/admin/sectors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newSectorName }),
    });
    const data = await res.json();
    if (data.success) {
      setSectors((prev) => [data.data, ...prev]);
      setNewSectorName('');
    } else {
      alert(data.error);
    }
  };

  const deleteSector = async (id) => {
    if (!confirm('Delete this sector?')) return;
    const res = await fetch('/api/admin/sectors', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setSectors((prev) => prev.filter((s) => s._id !== id));
    }
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

  const deleteLead = async (e, id) => {
    e.stopPropagation();
    if (!confirm('Delete this lead? This cannot be undone.')) return;
    await fetch('/api/admin/inquiries', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setInquiries((prev) => prev.filter((i) => i._id !== id));
    if (expandedId === id) setExpandedId(null);
  };

  return (
    <div className="flex min-h-screen bg-[#0a0c10] text-slate-300 font-sans relative overflow-x-hidden">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-red-600 text-white p-4 rounded-full shadow-2xl active:scale-95 transition-all"
      >
        {isSidebarOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        )}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#0f1218] border-r border-slate-800 flex flex-col transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex md:shrink-0
      `}>
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-2 h-2 bg-red-600 rounded-full" />
          <h1 className="text-lg font-black text-white uppercase tracking-tighter">
            Cognivix <span className="text-red-600">Admin</span>
          </h1>
        </div>

        <nav className="flex-grow p-4 space-y-1">
          <button
            onClick={() => setActiveTab('logs')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'logs' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab('sectors')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'sectors' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Sector Management
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'security' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Settings
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

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

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
                        <th className="px-5 py-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {inquiries.map((iq) => (
                        <React.Fragment key={iq._id}>
                          <tr
                            onClick={() => toggleRow(iq._id)}
                            className="hover:bg-white/[0.03] transition cursor-pointer select-none"
                          >
                            <td className="px-5 py-4 text-white font-bold whitespace-nowrap">{iq.name}</td>
                            <td className="px-5 py-4 text-red-400 font-mono text-xs whitespace-nowrap">{iq.email}</td>
                            <td className="px-5 py-4 whitespace-nowrap">
                              <span className="bg-red-600/10 text-red-400 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded border border-red-600/20">
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
                            <td className="px-5 py-4 text-right">
                              <button
                                onClick={(e) => deleteLead(e, iq._id)}
                                className="text-slate-600 hover:text-red-500 transition p-1 rounded"
                                title="Delete lead"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </td>
                          </tr>

                          {expandedId === iq._id && (
                            <tr className="bg-slate-900/40">
                              <td colSpan={6} className="px-5 py-5">
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
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : activeTab === 'sectors' ? (
          <div className="max-w-4xl space-y-8">
            <div className="bg-[#0f1218] p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6">Add New Sector</h3>
              <form onSubmit={addSector} className="flex gap-4">
                <input
                  type="text"
                  value={newSectorName}
                  onChange={(e) => setNewSectorName(e.target.value)}
                  className="flex-grow bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="e.g. Advanced AI Research"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 rounded-xl uppercase tracking-widest transition text-xs">
                  Add Sector
                </button>
              </form>
            </div>

            <div className="bg-[#0f1218] rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900/60">
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                    <th className="px-5 py-4">Sector Name</th>
                    <th className="px-5 py-4">Created At</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {sectors.map((sector) => (
                    <tr key={sector._id} className="hover:bg-white/[0.03] transition">
                      <td className="px-5 py-4 text-white font-bold">{sector.name}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs font-mono">
                        {new Date(sector.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => deleteSector(sector._id)}
                          className="text-slate-600 hover:text-red-500 transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {sectors.length === 0 && (
                    <tr>
                      <td colSpan={3} className="p-10 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                        No sectors defined.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
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
