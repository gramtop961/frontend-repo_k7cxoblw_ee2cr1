export default function Stats() {
  const stats = [
    { label: 'Projects launched', value: '120+' },
    { label: 'Avg. time-to-ship', value: '2.5x faster' },
    { label: 'Client NPS', value: '72' },
  ];
  return (
    <section id="features" className="bg-slate-50 border-y">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-3xl font-semibold">{s.value}</div>
            <div className="mt-1 text-sm text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
