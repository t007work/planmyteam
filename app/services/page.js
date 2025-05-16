// /app/services/page.js
import { sanity } from "../../lib/sanity";
import ServiceCard from "../../components/ServiceCard";

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await sanity.fetch(`*[_type == "service"]{_id, title, description}`);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service._id} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}
