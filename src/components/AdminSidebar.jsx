import React from 'react';
import { Home, Inbox, FileText, Users } from 'lucide-react';

const nav = [
  { key: 'overview', label: 'Overview', icon: Home },
  { key: 'messages', label: 'Messages', icon: Inbox },
  { key: 'posts', label: 'Posts', icon: FileText },
  { key: 'users', label: 'Users', icon: Users },
];

export default function AdminSidebar({ active, onChange }) {
  return (
    <aside className="sticky top-[72px] hidden h-[calc(100vh-72px)] w-60 shrink-0 border-r bg-white/60 p-3 backdrop-blur md:block">
      <nav className="space-y-1">
        {nav.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition ${
              active === key
                ? 'bg-slate-900 text-white shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
