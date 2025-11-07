export default function Testimonials() {
  const items = [
    {
      quote: 'FastDevp helped us cut our release cycle in half. The developer experience is superb.',
      author: 'Ava Martinez, CTO at Launchly',
    },
    {
      quote: 'We prototype ideas in hours, not weeks. The minimal UI keeps our team focused.',
      author: 'James Kim, Product Lead at Northstar',
    },
  ];
  return (
    <section id="testimonials" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">What teams say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <figure key={i} className="rounded-xl border bg-slate-50 p-6">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-600">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
