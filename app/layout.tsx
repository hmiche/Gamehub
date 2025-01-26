import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TowerControl as GameController } from "lucide-react";
import CookieConsent from '@/components/CookieConsent';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HTML5 Games - Play Free Online Games',
  description: 'Play the best free HTML5 games online! No downloads required.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GameController className="h-6 w-6 text-[#1864ab]" />
              <Link href="/" className="font-bold text-xl">{process.env.NEXT_PUBLIC_SITE_NAME}</Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="hover:text-[#1864ab] transition">Home</Link>
              <Link href="/games" className="hover:text-[#1864ab] transition">Games</Link>
              <Link href="/about" className="hover:text-[#1864ab] transition">About</Link>
              <Link href="/contact" className="hover:text-[#1864ab] transition">Contact</Link>
              <div className="relative group">
                <button className="hover:text-[#1864ab] transition py-4">Legal</button>
                <div className="absolute right-0 top-[100%] w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link 
                      href="/privacy-policy" 
                      className="block px-4 py-2 hover:bg-[#1864ab]/10 transition"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/terms" 
                      className="block px-4 py-2 hover:bg-[#1864ab]/10 transition"
                    >
                      Terms of Service
                    </Link>
                    <Link 
                      href="/cookie-policy" 
                      className="block px-4 py-2 hover:bg-[#1864ab]/10 transition"
                    >
                      Cookie Policy
                    </Link>
                    <Link 
                      href="/copyright" 
                      className="block px-4 py-2 hover:bg-[#1864ab]/10 transition"
                    >
                      Copyright
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-muted-foreground">
                  {process.env.NEXT_PUBLIC_SITE_NAME} is your destination for free HTML5 games. 
                  Play instantly in your browser!
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/" className="hover:text-[#1864ab] transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#games" className="hover:text-[#1864ab] transition">
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[#1864ab] transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#1864ab] transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-[#1864ab] transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-[#1864ab] transition">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy" className="hover:text-[#1864ab] transition">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/copyright" className="hover:text-[#1864ab] transition">
                      Copyright
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Connect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a 
                      href={process.env.NEXT_PUBLIC_DISCORD_INVITE} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#1864ab] transition"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#1864ab] transition"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a 
                      href={process.env.NEXT_PUBLIC_FACEBOOK_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#1864ab] transition"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a 
                      href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#1864ab] transition"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved.
              </p>
              <p className="mt-2 text-sm">
                Contact us: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </p>
            </div>
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}