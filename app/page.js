// /app/page.js
export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-green-700 text-white text-center">
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-6">We Plan. We Collaborate. You Celebrate.</h1>
        <p className="text-lg mb-8">Plan your next team-building event with confidence.</p>
        <a
          href="/services"
          className="inline-block bg-[#76b82a] text-white px-6 py-3 rounded hover:bg-[#65a023] transition"
        >
          Explore Services
        </a>
      </div>

      {/* JSON-LD Structured Data for Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PlanMyTeam",
          "url": "https://planmyteam.vercel.app",
          "logo": "https://planmyteam.vercel.app/favicon.ico",
          "sameAs": [
            "https://linkedin.com/company/planmyteam",
            "https://instagram.com/planmyteam"
          ]
        })
      }} />
    </section>
  );
}