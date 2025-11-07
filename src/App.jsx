import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ProtectedAdmin from "./components/ProtectedAdmin";

function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-blue-100">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-blue-900/80 text-sm">© {new Date().getFullYear()} FastDevp. All rights reserved.</div>
        <a
          href="mailto:hello@fastdevp.dev"
          className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
        >
          hello@fastdevp.dev
        </a>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function AdminPage() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <ProtectedAdmin />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-white text-blue-900">
      <div className="text-center px-6">
        <h1 className="text-4xl font-semibold mb-2">Page not found</h1>
        <p className="text-blue-900/70 mb-6">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="inline-block rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700">Go home</a>
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
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
