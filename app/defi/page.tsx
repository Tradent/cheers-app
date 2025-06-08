import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Shield, Eye, Lock, FileX } from "lucide-react"
import Link from "next/link"

export default function PrivacyFocusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Focus</h1>
              <p className="text-xl text-gray-400 mb-8">
                Browse without tracking or data collection. Cheers puts your privacy first with blockchain-powered
                protection.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">
                    <Download className="mr-2 h-5 w-5" /> Download Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                  <Link href="#features">
                    Privacy Features <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Introduction */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Your Privacy Matters</h2>
              <p className="text-gray-400 mb-8">
                Traditional browsers track your every move, collecting data about your browsing habits, preferences, and
                personal information. This data is often sold to advertisers or used to create detailed profiles about
                you. Cheers takes a fundamentally different approach, using blockchain technology to ensure your privacy
                is protected at every level.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src="/placeholder.svg?height=400&width=800&query=privacy%20focused%20browsing%20with%20blockchain%20amber%20theme"
                  alt="Privacy Focus"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400">
                With Cheers, your browsing data never leaves your device. Our browserless technology leverages Solana's
                blockchain to create secure, private connections to content without the need for tracking cookies,
                browser fingerprinting, or other invasive technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Features */}
        <section id="features" className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Privacy Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how Cheers protects your privacy at every level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No Tracking</h3>
                  <p className="text-gray-400 mb-4">
                    Cheers doesn't track your browsing history, search queries, or online behavior. Your data stays on
                    your device, not on our servers.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      No cookies or tracking pixels
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      No browser fingerprinting
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      No data collection or analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Eye className="h-12 w-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Anonymous Browsing</h3>
                  <p className="text-gray-400 mb-4">
                    Browse the web without revealing your identity. Cheers uses decentralized routing to ensure your IP
                    address and location remain private.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Decentralized routing through validator nodes
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      IP address masking and location privacy
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      No identifiable information transmitted
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Lock className="h-12 w-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Encrypted Communications</h3>
                  <p className="text-gray-400 mb-4">
                    All your browsing data is encrypted using advanced cryptographic protocols, ensuring that even if
                    intercepted, it cannot be read or understood.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      End-to-end encryption for all communications
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Blockchain-verified secure connections
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      No backdoors or master keys
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <FileX className="h-12 w-12 text-amber-300 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No Data Storage</h3>
                  <p className="text-gray-400 mb-4">
                    Cheers doesn't store your browsing data, search history, or personal information. What happens in
                    your browser stays in your browser.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      No server-side logging or data retention
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Local-only browsing history with encryption
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Automatic data clearing options
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Privacy Comparison */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Privacy Comparison</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how Cheers compares to traditional browsers when it comes to protecting your privacy.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-[#2d2d3a]">
                    <th className="py-4 px-6 text-left text-white">Feature</th>
                    <th className="py-4 px-6 text-center text-white">Traditional Browsers</th>
                    <th className="py-4 px-6 text-center text-white">Cheers Browserless</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Tracking Cookies</td>
                    <td className="py-4 px-6 text-center text-red-400">Yes</td>
                    <td className="py-4 px-6 text-center text-green-400">No</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Browser Fingerprinting</td>
                    <td className="py-4 px-6 text-center text-red-400">Yes</td>
                    <td className="py-4 px-6 text-center text-green-400">No</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">IP Address Masking</td>
                    <td className="py-4 px-6 text-center text-red-400">No (requires VPN)</td>
                    <td className="py-4 px-6 text-center text-green-400">Yes (built-in)</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Data Collection</td>
                    <td className="py-4 px-6 text-center text-red-400">Extensive</td>
                    <td className="py-4 px-6 text-center text-green-400">None</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Ad Tracking</td>
                    <td className="py-4 px-6 text-center text-red-400">Yes</td>
                    <td className="py-4 px-6 text-center text-green-400">No</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">End-to-End Encryption</td>
                    <td className="py-4 px-6 text-center text-yellow-400">Partial</td>
                    <td className="py-4 px-6 text-center text-green-400">Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Take Control of Your Privacy</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of users who have made the switch to truly private browsing with Cheers.
              </p>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                <Link href="/download">
                  <Download className="mr-2 h-5 w-5" /> Download Cheers Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
