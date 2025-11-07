import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.detail || "Failed to send message");
      }

      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      setStatus({ type: "error", message: err?.message || "Something went wrong. Please try again." });
    } finally {
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    }
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
              <p className="text-sm text-blue-900/60">Prefer email? kevinsuyadi2017@gmail.com</p>
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 transition disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
            {status.type === "success" && (
              <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800 ring-1 ring-green-200">
                {status.message}
              </div>
            )}
            {status.type === "error" && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-200">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
