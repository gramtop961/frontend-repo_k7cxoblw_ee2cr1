import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo submit: pretend to send and clear form
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
              <Mail className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-900">Let’s build something great</h2>
              <p className="text-sm text-blue-900/70">Tell me about your project and timeline.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-blue-900/80">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  className="w-full rounded-lg border border-blue-200 bg-white py-2.5 px-3 text-blue-900 placeholder-blue-900/40 outline-none ring-blue-200 focus:border-blue-300 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-blue-900/80">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-lg border border-blue-200 bg-white py-2.5 px-3 text-blue-900 placeholder-blue-900/40 outline-none ring-blue-200 focus:border-blue-300 focus:ring"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-blue-900/80">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a few details about your project goals."
                rows={5}
                required
                className="w-full rounded-lg border border-blue-200 bg-white py-2.5 px-3 text-blue-900 placeholder-blue-900/40 outline-none ring-blue-200 focus:border-blue-300 focus:ring"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-900/60">Prefer email? hello@fastdevp.dev</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 transition"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
            {sent && (
              <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800 ring-1 ring-green-200">
                Thanks! I’ll get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
