import React from 'react';
import { Settings } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
            <Settings className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">FastDevp Admin</h1>
            <p className="text-xs text-slate-500">Manage your content with ease</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Preview Site</button>
          <button className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800">Sign out</button>
        </div>
      </div>
    </header>
  );
}
