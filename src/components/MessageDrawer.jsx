import React from 'react';

export default function MessageDrawer({ open, item, onClose }) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="text-base font-semibold">Message details</h3>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100">Close</button>
        </div>
        {item ? (
          <div className="space-y-4 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">From</p>
              <p className="text-sm font-medium text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-700">{item.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Received</p>
              <p className="text-sm text-slate-700">{new Date(item.created_at || item.createdAt || Date.now()).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Message</p>
              <p className="whitespace-pre-wrap rounded-md border bg-slate-50 p-3 text-sm text-slate-800">{item.message}</p>
            </div>
          </div>
        ) : (
          <div className="p-5 text-slate-500">No message selected</div>
        )}
      </div>
    </div>
  );
}
