// /components/Header.jsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#76b82a]">PlanMyTeam</Link>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link href="/services" className="hover:text-[#76b82a]">Services</Link>
          <Link href="/portfolio" className="hover:text-[#76b82a]">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#76b82a]">Contact</Link>
        </nav>
      </div>
    </header>
  )
}