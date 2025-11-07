import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">FastDevp</Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-700 hover:text-slate-900">Features</a>
          <a href="#testimonials" className="text-slate-700 hover:text-slate-900">Testimonials</a>
          <Link to="/admin" className="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
