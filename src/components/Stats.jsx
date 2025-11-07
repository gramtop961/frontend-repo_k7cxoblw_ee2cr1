export default function Stats() {
  const stats = [
    { label: "Projects Delivered", value: "48+" },
    { label: "Active Clients", value: "12" },
    { label: "Avg. Delivery Time", value: "2.5 wks" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <section id="work" className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-blue-100 bg-blue-50/50 px-6 py-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-blue-700">{s.value}</div>
              <div className="mt-2 text-sm text-blue-700/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
