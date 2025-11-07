export default function Testimonials() {
  const testimonials = [
    {
      name: "Amelia Hart",
      role: "Product Manager, Acme Co.",
      quote:
        "Flawless execution and exceptional speed. Our launch timeline was cut in half without compromising quality.",
    },
    {
      name: "Marcus Lee",
      role: "Founder, Finlytics",
      quote:
        "Clean code, clean design. FastDevp brought our MVP to life and the UX exceeded expectations.",
    },
    {
      name: "Sara Patel",
      role: "CTO, Nova Health",
      quote:
        "Professional, responsive, and reliable. Communication and delivery were top-notch throughout.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">What clients say</h2>
          <p className="mt-3 text-blue-700/70">Results that speak for themselves.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
              <blockquote className="text-blue-900">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-blue-700/70">
                <span className="font-medium text-blue-900">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
