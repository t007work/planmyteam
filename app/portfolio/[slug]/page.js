// /app/portfolio/[slug]/page.js
import { sanity } from "../../../lib/sanity";
import Image from "next/image";
import SEO from "../../../components/SEO";

export async function generateStaticParams() {
  const slugs = await sanity.fetch(`*[_type == "portfolioItem"]{ "slug": slug.current }`);
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function PortfolioDetail({ params }) {
  const { slug } = params;
  const portfolio = await sanity.fetch(
    `*[_type == "portfolioItem" && slug.current == $slug][0]{
      title, client, eventType, date, summary,
      "images": imageGallery[].asset->url,
      seo
    }`,
    { slug }
  );

  if (!portfolio) return <div className="p-10">Not found.</div>;

  return (
    <>
      <SEO
        title={portfolio.seo?.title || portfolio.title}
        description={portfolio.seo?.description}
        ogImage={portfolio.seo?.ogImage?.asset?._ref}
        canonical={`https://planmyteam.vercel.app/portfolio/${slug}`}
      />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{portfolio.title}</h1>
        <p className="text-gray-600 mb-2">Client: {portfolio.client}</p>
        <p className="text-gray-600 mb-4">Event Type: {portfolio.eventType}</p>
        <p className="mb-8">{portfolio.summary}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolio.images?.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Image ${idx + 1}`}
              width={600}
              height={400}
              className="rounded shadow"
            />
          ))}
        </div>
      </section>
    </>
  );
} 
