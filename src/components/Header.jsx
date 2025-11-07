import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#admin", label: "Admin" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-blue-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-blue-700">FastDevp</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-900/80">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-blue-900 transition">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition">
            Get a Quote
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-blue-900">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="container mx-auto px-6 py-3 flex flex-col gap-2 text-sm text-blue-900/80">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
