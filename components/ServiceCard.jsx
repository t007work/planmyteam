// /components/ServiceCard.jsx
export default function ServiceCard({ title, description }) {
  return (
    <div className="p-6 border rounded-lg shadow bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  )
}
