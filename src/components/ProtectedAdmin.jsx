import { useEffect, useMemo, useState } from "react";
import { Lock, ShieldCheck, KeyRound, Mail } from "lucide-react";
import Admin from "./Admin";

// Simple client-side gate for demo purposes. For production, integrate real auth on the backend.
export default function ProtectedAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  // Demo passcode. In a real app, this should be server-side.
  const ADMIN_PASS = useMemo(() => "fastdevp-admin", []);

  useEffect(() => {
    const saved = localStorage.getItem("fastdevp_admin_auth");
    if (saved === "true") setAuthenticated(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASS) {
      setAuthenticated(true);
      localStorage.setItem("fastdevp_admin_auth", "true");
      setError("");
    } else {
      setError("Invalid passcode. Try again.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("fastdevp_admin_auth");
    setAuthenticated(false);
    setPasscode("");
  };

  if (authenticated) {
    return (
      <section id="admin" className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">Admin Panel</h2>
            </div>
            <button
              onClick={handleSignOut}
              className="rounded-lg border border-blue-200 px-3 py-1.5 text-sm text-blue-700 hover:bg-blue-50"
            >
              Sign out
            </button>
          </div>
          <Admin />
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
              <Lock className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Private Admin Access</h3>
              <p className="text-sm text-blue-900/70">Restricted area. Authorized users only.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="mb-2 block text-sm font-medium text-blue-900/80">
                Enter access passcode
              </label>
              <div className="relative">
                <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-900/50" />
                <input
                  id="passcode"
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-10 pr-3 text-blue-900 placeholder-blue-900/40 outline-none ring-blue-200 focus:border-blue-300 focus:ring"
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 transition"
            >
              Unlock Admin
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-blue-900/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@fastdevp.dev" className="hover:text-blue-900">Request access</a>
            </div>
            <span>FastDevp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
