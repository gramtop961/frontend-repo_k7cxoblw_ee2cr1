import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 grid place-items-center rounded-full bg-blue-50 text-blue-600 mb-4">
            <Rocket size={20} />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Build and ship faster with FastDevp
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            A modern developer toolkit to prototype, iterate, and deploy with confidence. Minimal UI, maximum speed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#features" className="rounded-md bg-blue-600 text-white px-5 py-3 hover:bg-blue-700">Explore features</a>
            <a href="#contact" className="rounded-md border px-5 py-3 text-slate-800 hover:bg-slate-50">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
