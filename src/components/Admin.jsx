import { useState } from "react";
import { Home, Users, ListChecks, CheckCheck, FileBarChart2 } from "lucide-react";

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full rounded-lg px-3 py-2 text-sm transition hover:bg-white/40 ${
      active ? "bg-white text-blue-800 shadow-sm" : "text-blue-50/90"
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

const StatusCard = ({ title, count, tone }) => {
  const tones = {
    progress: "bg-blue-50 text-blue-800 ring-blue-200",
    done: "bg-green-50 text-green-800 ring-green-200",
  };
  const style = tone === "done" ? tones.done : tones.progress;
  return (
    <div className={`rounded-xl p-5 ring-1 ${style}`}>
      <div className="text-sm opacity-80">{title}</div>
      <div className="mt-2 text-3xl font-semibold">{count}</div>
    </div>
  );
};

export default function Admin() {
  const [active, setActive] = useState("Dashboard");

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-60 shrink-0 rounded-2xl bg-gradient-to-b from-blue-700 to-blue-800 p-4 text-white">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="h-8 w-8 rounded-lg bg-white/20 grid place-items-center">FD</div>
              <div className="font-medium">FastDevp Admin</div>
            </div>
            <nav className="space-y-1">
              <NavItem icon={Home} label="Dashboard" active={active === "Dashboard"} onClick={() => setActive("Dashboard")} />
              <NavItem icon={Users} label="Client" active={active === "Client"} onClick={() => setActive("Client")} />
              <NavItem icon={ListChecks} label="In Progress" active={active === "In Progress"} onClick={() => setActive("In Progress")} />
              <NavItem icon={CheckCheck} label="Completed" active={active === "Completed"} onClick={() => setActive("Completed")} />
              <NavItem icon={FileBarChart2} label="Reports" active={active === "Reports"} onClick={() => setActive("Reports")} />
            </nav>
          </aside>

          {/* Dashboard Area */}
          <main className="flex-1">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-900">{active}</h3>
              <p className="text-sm text-blue-700/70">Quick overview of your project pipeline.</p>
            </div>

            {active === "Dashboard" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatusCard title="In Progress" count={6} tone="progress" />
                <StatusCard title="Code Review" count={2} tone="progress" />
                <StatusCard title="Awaiting Feedback" count={3} tone="progress" />
                <StatusCard title="Completed" count={42} tone="done" />
              </div>
            )}

            {active === "In Progress" && (
              <div className="rounded-xl border border-blue-100 p-6">
                <h4 className="font-medium text-blue-900">Active Projects</h4>
                <ul className="mt-4 space-y-3 text-sm text-blue-900/80">
                  <li className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3">SaaS Dashboard UI <span className="text-blue-700">70%</span></li>
                  <li className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3">E‑commerce Revamp <span className="text-blue-700">45%</span></li>
                  <li className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3">Healthcare Portal <span className="text-blue-700">25%</span></li>
                </ul>
              </div>
            )}

            {active === "Completed" && (
              <div className="rounded-xl border border-blue-100 p-6">
                <h4 className="font-medium text-blue-900">Completed Projects</h4>
                <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-blue-900/80">
                  <li className="rounded-lg bg-green-50 px-4 py-3">Fintech Analytics Platform</li>
                  <li className="rounded-lg bg-green-50 px-4 py-3">Real‑estate Listings Site</li>
                  <li className="rounded-lg bg-green-50 px-4 py-3">Portfolio Microsite</li>
                  <li className="rounded-lg bg-green-50 px-4 py-3">Ed‑tech Landing Page</li>
                </ul>
              </div>
            )}

            {active === "Client" && (
              <div className="rounded-xl border border-blue-100 p-6">
                <h4 className="font-medium text-blue-900">Client Directory</h4>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {["Acme Co.", "Finlytics", "Nova Health", "Orbit Media", "Luna Apps", "Peak Labs"].map((c) => (
                    <div key={c} className="rounded-lg bg-white p-4 ring-1 ring-blue-100">
                      <div className="h-9 w-9 rounded-md bg-blue-600/10 text-blue-700 grid place-items-center">{c[0]}</div>
                      <div className="mt-2 font-medium text-blue-900">{c}</div>
                      <div className="text-xs text-blue-700/70">Active</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === "Reports" && (
              <div className="rounded-xl border border-blue-100 p-6">
                <h4 className="font-medium text-blue-900">Monthly Summary</h4>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="text-sm text-blue-800/80">Revenue</div>
                    <div className="text-2xl font-semibold text-blue-900">$12,400</div>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="text-sm text-blue-800/80">Hours Tracked</div>
                    <div className="text-2xl font-semibold text-blue-900">164</div>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="text-sm text-blue-800/80">New Leads</div>
                    <div className="text-2xl font-semibold text-blue-900">18</div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
