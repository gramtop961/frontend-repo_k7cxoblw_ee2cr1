import React, { useEffect, useMemo, useState } from 'react';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import MessageTable from './components/MessageTable';
import MessageDrawer from './components/MessageDrawer';

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export default function App() {
  const [activeTab, setActiveTab] = useState('messages');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  async function fetchItems() {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${API_BASE}/api/messages`);
      if (!res.ok) throw new Error('Failed to load');
      const data = await res.json();
      setItems(data.items || data || []);
    } catch (err) {
      setError(err.message || 'Error fetching');
    } finally {
      setLoading(false);
    }
  }

  async function toggleRead(m) {
    try {
      await fetch(`${API_BASE}/api/messages/${m._id}?read=${!m.read}`, {
        method: 'PATCH',
      });
      setItems((prev) => prev.map((it) => (it._id === m._id ? { ...it, read: !m.read } : it)));
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteMessage(m) {
    try {
      await fetch(`${API_BASE}/api/messages/${m._id}`, { method: 'DELETE' });
      setItems((prev) => prev.filter((it) => it._id !== m._id));
      setSelected(null);
    } catch (e) {
      console.error(e);
    }
  }

  const tabs = useMemo(() => ({
    overview: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Total Messages</p>
          <p className="mt-1 text-3xl font-semibold">{items.length}</p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Unread</p>
          <p className="mt-1 text-3xl font-semibold">{items.filter(i => !i.read).length}</p>
        </div>
        <div className="rounded-lg border bg-white p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">Last Message</p>
          <p className="mt-1 text-sm text-slate-700">{items[0] ? new Date(items[0].created_at || items[0].createdAt).toLocaleString() : '—'}</p>
        </div>
      </div>
    ),
    messages: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Inbox</h2>
          <div className="flex items-center gap-2">
            <button onClick={fetchItems} className="rounded-md border px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Refresh</button>
          </div>
        </div>
        <MessageTable items={items} onSelect={(m) => setSelected(m)} onToggleRead={toggleRead} onDelete={deleteMessage} />
      </div>
    ),
    posts: (
      <div className="rounded-lg border bg-white p-8 text-slate-600">Posts CRUD coming soon.</div>
    ),
    users: (
      <div className="rounded-lg border bg-white p-8 text-slate-600">Users CRUD coming soon.</div>
    ),
  }), [items]);

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminHeader />
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6">
        <AdminSidebar active={activeTab} onChange={setActiveTab} />

        <main className="flex-1 space-y-4">
          {loading && (
            <div className="rounded-md border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm text-indigo-800">Loading...</div>
          )}
          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</div>
          )}
          {tabs[activeTab]}
        </main>
      </div>

      <MessageDrawer open={!!selected} item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
