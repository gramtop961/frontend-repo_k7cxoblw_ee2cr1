import React from 'react';

export default function MessageTable({ items = [], onSelect, onToggleRead, onDelete }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">From</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Email</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Message</th>
            <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {items.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-12 text-center text-slate-500">No messages yet</td>
            </tr>
          )}
          {items.map((m) => (
            <tr key={m._id} className="hover:bg-slate-50">
              <td className="px-4 py-3 text-sm font-medium text-slate-800">{m.name}</td>
              <td className="px-4 py-3 text-sm text-slate-700">{m.email}</td>
              <td className="px-4 py-3 text-sm text-slate-700 line-clamp-2">{m.message}</td>
              <td className="px-4 py-3 text-center">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${m.read ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'}`}>{m.read ? 'Read' : 'Unread'}</span>
              </td>
              <td className="px-4 py-3 text-right space-x-2">
                <button onClick={() => onSelect && onSelect(m)} className="rounded-md border px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">View</button>
                <button onClick={() => onToggleRead && onToggleRead(m)} className="rounded-md border px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">{m.read ? 'Mark Unread' : 'Mark Read'}</button>
                <button onClick={() => onDelete && onDelete(m)} className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-100">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
