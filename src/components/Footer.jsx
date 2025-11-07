export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100">
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
