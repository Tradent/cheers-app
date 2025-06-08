import Link from "next/link"
import { Beer, Github, Twitter, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0e0e13] border-t border-[#2d2d3a]">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Beer className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl text-white">Cheers</span>
            </div>
            <p className="text-gray-400">
              The world's first browserless browser powered by Solana blockchain technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Discord className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/cheers-browser" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/download" className="text-gray-400 hover:text-white">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/browserless" className="text-gray-400 hover:text-white">
                  Browserless Technology
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-white">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bars/popular" className="text-gray-400 hover:text-white">
                  Bars
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/cheers" className="text-gray-400 hover:text-white">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-gray-400 hover:text-white">
                  Governance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white">
                  API
                </Link>
              </li>
              <li>
                <Link href="https://github.com/cheers-browser" className="text-gray-400 hover:text-white">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-400 hover:text-white">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#2d2d3a] text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cheers Browserless. All rights reserved.</p>
          <p className="mt-2 text-sm">Powered by Solana Blockchain Technology</p>
        </div>
      </div>
    </footer>
  )
}
