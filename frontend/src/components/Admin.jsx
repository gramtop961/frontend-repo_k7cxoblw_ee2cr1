import { useEffect, useState } from 'react';
import { ShieldCheck, LogOut } from 'lucide-react';

export default function Admin({ onSignOut, apiBase }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const token = localStorage.getItem('fdp_token') || '';

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch(`${apiBase}/admin/overview`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.detail || 'Failed to load');
        setData(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchOverview();
  }, [apiBase, token]);

  if (loading) {
    return (
      <div className="min-h-[70vh] grid place-items-center">
        <div className="animate-pulse text-slate-500">Loading dashboard...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-[70vh] grid place-items-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Session expired or unauthorized.</p>
          <button onClick={onSignOut} className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign in again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-full bg-blue-50 text-blue-600">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">FastDevp Admin</h1>
            <p className="text-sm text-slate-600">Signed in as {data.user.email}</p>
          </div>
        </div>
        <button onClick={onSignOut} className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-slate-700 hover:bg-slate-50">
          <LogOut size={16} />
          Sign out
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Projects" value={data.metrics.projects} />
        <MetricCard label="Active users" value={data.metrics.active_users} />
        <MetricCard label="Deployments" value={data.metrics.deployments} />
      </div>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}
