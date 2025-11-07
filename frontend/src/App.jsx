import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ProtectedAdmin from './components/ProtectedAdmin';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
      </main>
      <footer className="border-t mt-16 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} FastDevp. Built for speed.{' '}
          <Link className="text-blue-600 hover:underline" to="/admin">Admin</Link>
        </p>
      </footer>
    </div>
  );
}

function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ProtectedAdmin />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Page not found</h1>
        <p className="text-slate-600 mb-6">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Go home</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
