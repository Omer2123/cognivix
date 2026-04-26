'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancedDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [agencies, setAgencies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [resources, setResources] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('logs');
  const [newPassword, setNewPassword] = useState('');
  const [newSectorName, setNewSectorName] = useState('');
  const [newAgency, setNewAgency] = useState({ name: '', logo: '' });
  const [newJob, setNewJob] = useState({ title: '', location: '', type: 'Full-time', department: '', description: '', requirements: '' });
  const [newResource, setNewResource] = useState({ title: '', tagline: '', desc: '', bullets: '', cta: 'Learn More', link: '/#contact' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);
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

    const agenciesRes = await fetch('/api/admin/agencies');
    const agenciesData = await agenciesRes.json();
    if (agenciesData.success) setAgencies(agenciesData.data);

    const jobsRes = await fetch('/api/admin/jobs');
    const jobsData = await jobsRes.json();
    if (jobsData.success) setJobs(jobsData.data);

    const resourcesRes = await fetch('/api/admin/resources');
    const resourcesData = await resourcesRes.json();
    if (resourcesData.success) setResources(resourcesData.data);

    const applicationsRes = await fetch('/api/admin/applications');
    const applicationsData = await applicationsRes.json();
    if (applicationsData.success) setApplications(applicationsData.data);

    setLoading(false);
  };

  const addResource = async (e) => {
    e.preventDefault();
    if (!newResource.title) return;
    const res = await fetch('/api/admin/resources', {
      method: editingId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingId ? { ...newResource, id: editingId } : newResource),
    });
    const data = await res.json();
    if (data.success) {
      if (editingId) {
        setResources((prev) => prev.map((r) => (r._id === editingId ? data.data : r)));
        setEditingId(null);
      } else {
        setResources((prev) => [...prev, data.data]);
      }
      setNewResource({ title: '', tagline: '', desc: '', bullets: '', cta: 'Learn More', link: '/#contact' });
    } else {
      alert(data.error);
    }
  };

  const editResource = (res) => {
    setNewResource({
      title: res.title,
      tagline: res.tagline,
      desc: res.desc,
      bullets: res.bullets,
      cta: res.cta,
      link: res.link
    });
    setEditingId(res._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteResource = async (id) => {
    if (!confirm('Delete this resource?')) return;
    const res = await fetch('/api/admin/resources', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setResources((prev) => prev.filter((r) => r._id !== id));
    }
  };

  const addJob = async (e) => {
    e.preventDefault();
    if (!newJob.title || !newJob.description) return;
    const res = await fetch('/api/admin/jobs', {
      method: editingId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingId ? { ...newJob, id: editingId } : newJob),
    });
    const data = await res.json();
    if (data.success) {
      if (editingId) {
        setJobs((prev) => prev.map((j) => (j._id === editingId ? data.data : j)));
        setEditingId(null);
      } else {
        setJobs((prev) => [data.data, ...prev]);
      }
      setNewJob({ title: '', location: '', type: 'Full-time', department: '', description: '', requirements: '' });
    } else {
      alert(data.error);
    }
  };

  const editJob = (job) => {
    setNewJob({
      title: job.title,
      location: job.location,
      type: job.type,
      department: job.department,
      description: job.description,
      requirements: job.requirements
    });
    setEditingId(job._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteJob = async (id) => {
    if (!confirm('Delete this job opening?')) return;
    const res = await fetch('/api/admin/jobs', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setJobs((prev) => prev.filter((j) => j._id !== id));
    }
  };

  const addAgency = async (e) => {
    e.preventDefault();
    let logoUrl = newAgency.logo;

    if (selectedFile) {
      setIsUploading(true);
      try {
        const res = await fetch(`/api/admin/agencies/upload?filename=${selectedFile.name}`, {
          method: 'POST',
          body: selectedFile,
        });
        const data = await res.json();
        if (data.success) {
          logoUrl = data.url;
        } else {
          alert('Upload failed: ' + data.error);
          setIsUploading(false);
          return;
        }
      } catch (err) {
        alert('Upload error: ' + err.message);
        setIsUploading(false);
        return;
      }
      setIsUploading(false);
    }

    if (!newAgency.name || !logoUrl) {
      alert('Agency Name and Logo (URL or File) are required.');
      return;
    }

    const res = await fetch('/api/admin/agencies', {
      method: editingId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingId ? { ...newAgency, logo: logoUrl, id: editingId } : { ...newAgency, logo: logoUrl }),
    });
    const data = await res.json();
    if (data.success) {
      if (editingId) {
        setAgencies((prev) => prev.map((a) => (a._id === editingId ? data.data : a)));
        setEditingId(null);
      } else {
        setAgencies((prev) => [data.data, ...prev]);
      }
      setNewAgency({ name: '', logo: '' });
      setSelectedFile(null);
      const fileInput = document.getElementById('agency-logo-upload');
      if (fileInput) fileInput.value = '';
    } else {
      alert(data.error);
    }
  };

  const editAgency = (agency) => {
    setNewAgency({ name: agency.name, logo: agency.logo });
    setEditingId(agency._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteAgency = async (id) => {
    if (!confirm('Delete this agency?')) return;
    const res = await fetch('/api/admin/agencies', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setAgencies((prev) => prev.filter((a) => a._id !== id));
    }
  };

  const addSector = async (e) => {
    e.preventDefault();
    if (!newSectorName) return;
    const res = await fetch('/api/admin/sectors', {
      method: editingId ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingId ? { name: newSectorName, id: editingId } : { name: newSectorName }),
    });
    const data = await res.json();
    if (data.success) {
      if (editingId) {
        setSectors((prev) => prev.map((s) => (s._id === editingId ? data.data : s)));
        setEditingId(null);
      } else {
        setSectors((prev) => [data.data, ...prev]);
      }
      setNewSectorName('');
    } else {
      alert(data.error);
    }
  };

  const editSector = (sector) => {
    setNewSectorName(sector.name);
    setEditingId(sector._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const deleteApplication = async (id) => {
    if (!confirm('Delete this application dossier?')) return;
    const res = await fetch('/api/admin/applications', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setApplications((prev) => prev.filter((a) => a._id !== id));
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
    let header = '';
    let rows = [];
    let filename = 'export.csv';

    switch (activeTab) {
      case 'logs':
        header = 'Name,Email,Service Category,Message,Date';
        rows = inquiries.map((i) =>
          `"${i.name}","${i.email}","${i.serviceCategory || ''}","${i.message}","${new Date(i.createdAt).toLocaleString()}"`
        );
        filename = 'inquiries.csv';
        break;
      case 'applications':
        header = 'Candidate Name,Email,Phone,Applied For,Message,Date';
        rows = applications.map((a) =>
          `"${a.name}","${a.email}","${a.phone || ''}","${a.jobTitle}","${(a.message || '').replace(/\n/g, ' ')}","${new Date(a.createdAt).toLocaleString()}"`
        );
        filename = 'job_applications.csv';
        break;
      case 'careers':
        header = 'Job Title,Location,Type,Department,Description';
        rows = jobs.map((j) =>
          `"${j.title}","${j.location}","${j.type}","${j.department}","${(j.description || '').replace(/\n/g, ' ')}"`
        );
        filename = 'job_openings.csv';
        break;
      case 'resources':
        header = 'Title,Tagline,Description,CTA,Link';
        rows = resources.map((r) =>
          `"${r.title}","${r.tagline}","${(r.desc || '').replace(/\n/g, ' ')}","${r.cta}","${r.link}"`
        );
        filename = 'contractor_resources.csv';
        break;
      case 'agencies':
        header = 'Agency Name,Logo URL';
        rows = agencies.map((a) => `"${a.name}","${a.logo}"`);
        filename = 'agencies.csv';
        break;
      case 'sectors':
        header = 'Sector Name,Created At';
        rows = sectors.map((s) => `"${s.name}","${new Date(s.createdAt).toLocaleString()}"`);
        filename = 'sectors.csv';
        break;
      default:
        alert('Export not available for this tab.');
        return;
    }

    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            onClick={() => setActiveTab('agencies')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'agencies' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Agency Management
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'careers' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Career Management
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'applications' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Job Applications
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition border-l-2 ${activeTab === 'resources' ? 'border-red-600 text-white bg-white/5' : 'border-transparent hover:bg-slate-800/50 text-slate-500'
              }`}
          >
            Contractor Corner
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
          {['logs', 'applications', 'careers', 'resources', 'agencies', 'sectors'].includes(activeTab) && (
            <button
              onClick={exportData}
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition"
            >
              Export {activeTab === 'logs' ? 'Leads' : activeTab === 'applications' ? 'Applications' : activeTab === 'careers' ? 'Jobs' : activeTab === 'resources' ? 'Resources' : activeTab === 'agencies' ? 'Agencies' : 'Sectors'} CSV
            </button>
          )}
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
        ) : activeTab === 'resources' ? (
          <div className="max-w-4xl space-y-8">
            <div className="bg-[#0f1218] p-8 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                  {editingId ? 'Edit Resource' : 'Add New Resource Card'}
                </h3>
                {editingId && (
                  <button onClick={() => { setEditingId(null); setNewResource({ title: '', tagline: '', desc: '', bullets: '', cta: 'Learn More', link: '/#contact' }); }} className="text-[10px] text-slate-500 hover:text-white font-bold uppercase tracking-widest transition">
                    Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={addResource} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newResource.title}
                    onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Title (e.g. Getting Started)"
                  />
                  <input
                    type="text"
                    value={newResource.tagline}
                    onChange={(e) => setNewResource({ ...newResource, tagline: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Tagline (e.g. SAM.gov Basics)"
                  />
                </div>
                <textarea
                  value={newResource.desc}
                  onChange={(e) => setNewResource({ ...newResource, desc: e.target.value })}
                  className="w-full h-24 bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="Short Description..."
                />
                <textarea
                  value={newResource.bullets}
                  onChange={(e) => setNewResource({ ...newResource, bullets: e.target.value })}
                  className="w-full h-24 bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="Bullet Points (one per line)..."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newResource.cta}
                    onChange={(e) => setNewResource({ ...newResource, cta: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Button Text (e.g. Talk to an Advisor)"
                  />
                  <input
                    type="text"
                    value={newResource.link}
                    onChange={(e) => setNewResource({ ...newResource, link: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Link URL (e.g. /#contact)"
                  />
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest transition text-xs">
                  Create Resource Card
                </button>
              </form>
            </div>

            <div className="bg-[#0f1218] rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900/60">
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                    <th className="px-5 py-4">Title</th>
                    <th className="px-5 py-4">Tagline</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {resources.map((res) => (
                    <tr key={res._id} className="hover:bg-white/[0.03] transition">
                      <td className="px-5 py-4 text-white font-bold">{res.title}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs">{res.tagline}</td>
                      <td className="px-5 py-4 text-right space-x-2">
                        <button
                          onClick={() => editResource(res)}
                          className="text-slate-600 hover:text-white transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteResource(res._id)}
                          className="text-slate-600 hover:text-red-500 transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {resources.length === 0 && (
                    <tr>
                      <td colSpan={3} className="p-10 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                        No resources defined.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : activeTab === 'applications' ? (
          <div className="max-w-6xl space-y-8">
            <div className="bg-[#0f1218] rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900/60">
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                    <th className="px-5 py-4">Candidate</th>
                    <th className="px-5 py-4">Applied For</th>
                    <th className="px-5 py-4">Dossier / CV</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {applications.map((app) => (
                    <React.Fragment key={app._id}>
                      <tr className="hover:bg-white/[0.03] transition group">
                        <td className="px-5 py-6">
                          <div className="flex flex-col">
                            <span className="text-white font-black uppercase tracking-tight">{app.name}</span>
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{app.email}</span>
                          </div>
                        </td>
                        <td className="px-5 py-6">
                          <span className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full">
                            {app.jobTitle}
                          </span>
                        </td>
                        <td className="px-5 py-6">
                          <a 
                            href={app.cvUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition text-[10px] font-black uppercase tracking-widest"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Document
                          </a>
                        </td>
                        <td className="px-5 py-6 text-right space-x-3">
                          <button
                            onClick={() => setExpandedId(expandedId === app._id ? null : app._id)}
                            className="text-slate-600 hover:text-white transition p-1"
                          >
                            <svg className={`w-5 h-5 transition-transform ${expandedId === app._id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteApplication(app._id)}
                            className="text-slate-600 hover:text-red-500 transition p-1"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      {expandedId === app._id && (
                        <tr className="bg-slate-900/40">
                          <td colSpan={4} className="px-8 py-8">
                            <div className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-2">Candidate Message</span>
                                  <p className="text-slate-400 text-sm italic leading-relaxed">"{app.message || 'No additional message provided.'}"</p>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1">Phone Number</span>
                                    <p className="text-white text-sm font-bold">{app.phone || 'N/A'}</p>
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1">Submission Date</span>
                                    <p className="text-white text-sm font-bold">{new Date(app.createdAt).toLocaleString()}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                  {applications.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-20 text-center text-slate-500 text-xs font-black uppercase tracking-widest">
                        No applications received yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : activeTab === 'careers' ? (
          <div className="max-w-4xl space-y-8">
            <div className="bg-[#0f1218] p-8 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                  {editingId ? 'Edit Job Opening' : 'Create New Job Opening'}
                </h3>
                {editingId && (
                  <button onClick={() => { setEditingId(null); setNewJob({ title: '', location: '', type: 'Full-time', department: '', description: '', requirements: '' }); }} className="text-[10px] text-slate-500 hover:text-white font-bold uppercase tracking-widest transition">
                    Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={addJob} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Job Title (e.g. Senior Cyber Analyst)"
                  />
                  <input
                    type="text"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Location (e.g. Washington, D.C.)"
                  />
                  <select
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <input
                    type="text"
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="Department (e.g. Defense Operations)"
                  />
                </div>
                <textarea
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  className="w-full h-32 bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="Job Description..."
                />
                <textarea
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  className="w-full h-32 bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="Requirements (one per line)..."
                />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest transition text-xs">
                  {editingId ? 'Update Job Opening' : 'Post Job Opening'}
                </button>
              </form>
            </div>

            <div className="bg-[#0f1218] rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900/60">
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                    <th className="px-5 py-4">Position</th>
                    <th className="px-5 py-4">Location</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {jobs.map((job) => (
                    <tr key={job._id} className="hover:bg-white/[0.03] transition">
                      <td className="px-5 py-4 text-white font-bold">{job.title}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs">{job.location}</td>
                      <td className="px-5 py-4 text-right space-x-2">
                        <button
                          onClick={() => editJob(job)}
                          className="text-slate-600 hover:text-white transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteJob(job._id)}
                          className="text-slate-600 hover:text-red-500 transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {jobs.length === 0 && (
                    <tr>
                      <td colSpan={3} className="p-10 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                        No active vacancies.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : activeTab === 'agencies' ? (
          <div className="max-w-4xl space-y-8">
            <div className="bg-[#0f1218] p-8 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                  {editingId ? 'Edit Agency' : 'Add New Agency'}
                </h3>
                {editingId && (
                  <button onClick={() => { setEditingId(null); setNewAgency({ name: '', logo: '' }); }} className="text-[10px] text-slate-500 hover:text-white font-bold uppercase tracking-widest transition">
                    Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={addAgency} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Agency Name</label>
                    <input
                      type="text"
                      value={newAgency.name}
                      onChange={(e) => setNewAgency({ ...newAgency, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                      placeholder="e.g. NASA"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Option A: Upload Logo (Vercel Blob)</label>
                    <input
                      id="agency-logo-upload"
                      type="file"
                      accept=".svg,.png,.jpg,.jpeg"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                      className="w-full bg-slate-900 border border-slate-800 p-3.5 rounded-xl text-white outline-none focus:border-red-600 transition text-xs file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-red-600 file:text-white hover:file:bg-red-700"
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                    <span className="bg-[#0f1218] px-4 text-slate-600">OR</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Option B: Use External Logo URL</label>
                  <input
                    type="text"
                    value={newAgency.logo}
                    onChange={(e) => setNewAgency({ ...newAgency, logo: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    placeholder="https://example.com/logo.svg"
                    disabled={!!selectedFile}
                  />
                  {selectedFile && (
                    <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">
                      File selected — URL input disabled
                    </p>
                  )}
                </div>

                <button 
                  disabled={isUploading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-800 text-white font-black py-5 rounded-xl uppercase tracking-widest transition text-xs shadow-[0_10px_30px_-10px_rgba(220,38,38,0.4)]"
                >
                  {isUploading ? 'Uploading...' : editingId ? 'Update Agency' : 'Register Agency'}
                </button>
              </form>
            </div>

            <div className="bg-[#0f1218] rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900/60">
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                    <th className="px-5 py-4">Preview</th>
                    <th className="px-5 py-4">Agency Name</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {agencies.map((agency) => (
                    <tr key={agency._id} className="hover:bg-white/[0.03] transition">
                      <td className="px-5 py-4">
                        <img src={agency.logo} alt={agency.name} className="h-8 w-auto object-contain brightness-0 invert opacity-60" />
                      </td>
                      <td className="px-5 py-4 text-white font-bold">{agency.name}</td>
                      <td className="px-5 py-4 text-right space-x-2">
                        <button
                          onClick={() => editAgency(agency)}
                          className="text-slate-600 hover:text-white transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteAgency(agency._id)}
                          className="text-slate-600 hover:text-red-500 transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {agencies.length === 0 && (
                    <tr>
                      <td colSpan={3} className="p-10 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                        No agencies registered.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : activeTab === 'sectors' ? (
          <div className="max-w-4xl space-y-8">
            <div className="bg-[#0f1218] p-8 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                  {editingId ? 'Edit Sector' : 'Add New Sector'}
                </h3>
                {editingId && (
                  <button onClick={() => { setEditingId(null); setNewSectorName(''); }} className="text-[10px] text-slate-500 hover:text-white font-bold uppercase tracking-widest transition">
                    Cancel Edit
                  </button>
                )}
              </div>
              <form onSubmit={addSector} className="flex gap-4">
                <input
                  type="text"
                  value={newSectorName}
                  onChange={(e) => setNewSectorName(e.target.value)}
                  className="flex-grow bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                  placeholder="e.g. Advanced AI Research"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 rounded-xl uppercase tracking-widest transition text-xs">
                  {editingId ? 'Update Sector' : 'Add Sector'}
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
                      <td className="px-5 py-4 text-right space-x-2">
                        <button
                          onClick={() => editSector(sector)}
                          className="text-slate-600 hover:text-white transition p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
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
