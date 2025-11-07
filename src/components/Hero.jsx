import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 via-blue-600 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent" />
      <div className="container mx-auto px-6 py-24 relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
            <Rocket className="h-5 w-5" />
            <span className="text-sm tracking-wide">FastDevp — Modern Web Experiences</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Build fast. Deliver faster.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100">
            A minimalist, professional portfolio and admin suite for a freelance web developer.
            Showcase your work, win client trust, and manage projects in one clean interface.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="rounded-lg bg-white text-blue-700 px-5 py-3 font-medium shadow-sm hover:bg-blue-50 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-blue-500/20 text-white px-5 py-3 font-medium ring-1 ring-white/30 hover:bg-blue-500/30 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[110%] rounded-[100%] bg-white" />
    </section>
  );
}
