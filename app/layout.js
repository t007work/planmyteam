// /app/layout.js
import './globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: 'PlanMyTeam – Corporate Team Building Events',
  description: 'PlanMyTeam specializes in virtual, physical, and retreat-based corporate team building experiences designed to boost collaboration and culture.',
  metadataBase: new URL('https://planmyteam.vercel.app'),
  openGraph: {
    title: 'PlanMyTeam – Corporate Team Building Events',
    description: 'Engaging events for modern teams. Virtual, physical, and fully customized experiences.',
        other: {
      'google-site-verification': 'GogqIns8cMwe9ZlbNvyqFX5Ma6B0iOXbb029UAa80MM' // paste your full code here
    },
    url: 'https://planmyteam.vercel.app',
    siteName: 'PlanMyTeam',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'PlanMyTeam logo and team photo'
      }
    ],
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
