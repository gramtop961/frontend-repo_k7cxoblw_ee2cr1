import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
