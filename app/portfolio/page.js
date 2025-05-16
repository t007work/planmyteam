// /app/portfolio/page.js
import { sanity } from "../../lib/sanity";
import Link from "next/link";

export const revalidate = 60;

export default async function PortfolioPage() {
  const items = await sanity.fetch(`*[_type == "portfolioItem"]{_id, title, slug, summary}`);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Work</h1>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item._id} className="p-4 border rounded">
            <Link href={`/portfolio/${item.slug.current}`}>
              <h2 className="text-2xl font-semibold hover:text-[#76b82a]">{item.title}</h2>
            </Link>
            <p className="text-gray-700 mt-2">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
