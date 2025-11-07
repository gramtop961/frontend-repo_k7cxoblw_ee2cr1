import { useEffect, useMemo, useState } from 'react';
import { Lock, ShieldCheck, KeyRound, Mail } from 'lucide-react';
import Admin from './Admin';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function ProtectedAdmin() {
  const [view, setView] = useState('signin'); // signin | signup | app
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const token = useMemo(() => localStorage.getItem('fdp_token') || '', []);
  const [authed, setAuthed] = useState(!!token);

  useEffect(() => {
    if (authed) setView('app');
  }, [authed]);

  const handleAuth = async (mode) => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${API_BASE}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Authentication failed');
      localStorage.setItem('fdp_token', data.access_token);
      setAuthed(true);
      setView('app');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('fdp_token');
    setAuthed(false);
    setView('signin');
  };

  if (view !== 'app') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 grid place-items-center rounded-full bg-blue-50 text-blue-600">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Admin access</h2>
              <p className="text-sm text-slate-600">Sign in to manage FastDevp</p>
            </div>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 text-red-700 px-3 py-2 text-sm border border-red-100">
              {error}
            </div>
          )}

          <div className="space-y-3">
            <label className="block">
              <span className="text-sm text-slate-700">Email</span>
              <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-200">
                <Mail size={16} className="text-slate-500" />
                <input
                  type="email"
                  className="w-full outline-none"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm text-slate-700">Password</span>
              <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-200">
                <KeyRound size={16} className="text-slate-500" />
                <input
                  type="password"
                  className="w-full outline-none"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>

            <button
              disabled={loading}
              onClick={() => handleAuth('login')}
              className="w-full rounded-md bg-blue-600 text-white py-2 hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <button
              type="button"
              onClick={() => setView(view === 'signin' ? 'signup' : 'signin')}
              className="w-full text-sm text-slate-600 hover:text-slate-800"
            >
              {view === 'signin' ? 'Create first admin' : 'Back to sign in'}
            </button>

            {view === 'signup' && (
              <p className="text-xs text-slate-500">
                Registration is only allowed once to create the first admin account.
              </p>
            )}
          </div>

          {view === 'signup' && (
            <div className="mt-4">
              <button
                disabled={loading}
                onClick={() => handleAuth('register')}
                className="w-full rounded-md border border-blue-200 text-blue-700 py-2 hover:bg-blue-50 disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create admin and sign in'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <Admin onSignOut={signOut} apiBase={API_BASE} />;
}
