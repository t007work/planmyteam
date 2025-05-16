// /app/contact/page.js
export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="grid gap-6">
        <input className="p-3 border rounded" type="text" placeholder="Your Name" required />
        <input className="p-3 border rounded" type="email" placeholder="Your Email" required />
        <textarea className="p-3 border rounded" rows={5} placeholder="Your Message" required />
        <button className="bg-[#76b82a] text-white px-6 py-3 rounded hover:bg-[#65a023] transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
