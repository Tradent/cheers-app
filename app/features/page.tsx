import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Beer, Gift, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Features</h1>
              <p className="text-xl text-gray-400 mb-8">
                Discover the powerful features that make Cheers the ultimate browserless experience
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">Try Cheers Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Core Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our Solana-powered browserless technology combines powerful features with a user-friendly interface
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-600/20 p-4">
                      <Shield className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Enhanced Privacy</h3>
                    <p className="text-gray-400">
                      No tracking, no cookies, no surveillance. Your browsing data stays with you, secured by blockchain
                      technology.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-500/20 p-4">
                      <Zap className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Lightning Fast</h3>
                    <p className="text-gray-400">
                      Experience browsing speeds up to 10x faster than traditional browsers thanks to Solana's
                      high-performance blockchain.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-400/20 p-4">
                      <Globe className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Decentralized Access</h3>
                    <p className="text-gray-400">
                      Access content through a network of decentralized nodes, bypassing censorship and central points
                      of failure.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Community Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Connect with others and build communities in the Cheers ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-500/20 p-4">
                      <Beer className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Community Bars</h3>
                    <p className="text-gray-400">
                      Join community-maintained bars where you can connect with other blockchain enthusiasts, share
                      insights, and earn rewards.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-600/20 p-4">
                      <Gift className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Exclusive Promotions</h3>
                    <p className="text-gray-400">
                      Enjoy free beer promotions, tabs, and other exclusive benefits as a frequent browser. The more you
                      explore, the more you earn.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-400/20 p-4">
                      <Code className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Developer Tools</h3>
                    <p className="text-gray-400">
                      Access a comprehensive suite of developer-friendly tools with a next-level user interface. Build,
                      test, and deploy with ease.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Cheers?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">See how Cheers compares to traditional browsers</p>
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
                    <td className="py-4 px-6 text-gray-300">Privacy Protection</td>
                    <td className="py-4 px-6 text-center text-red-400">Limited</td>
                    <td className="py-4 px-6 text-center text-green-400">Complete</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Loading Speed</td>
                    <td className="py-4 px-6 text-center text-yellow-400">Average</td>
                    <td className="py-4 px-6 text-center text-green-400">10x Faster</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Web3 Integration</td>
                    <td className="py-4 px-6 text-center text-red-400">Requires Extensions</td>
                    <td className="py-4 px-6 text-center text-green-400">Native</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Decentralization</td>
                    <td className="py-4 px-6 text-center text-red-400">None</td>
                    <td className="py-4 px-6 text-center text-green-400">Full</td>
                  </tr>
                  <tr className="border-b border-[#2d2d3a]">
                    <td className="py-4 px-6 text-gray-300">Community Features</td>
                    <td className="py-4 px-6 text-center text-red-400">Limited</td>
                    <td className="py-4 px-6 text-center text-green-400">Extensive</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-300">Reward System</td>
                    <td className="py-4 px-6 text-center text-red-400">No</td>
                    <td className="py-4 px-6 text-center text-green-400">Yes</td>
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
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Cheers?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of users already exploring the metaverse without the limitations of traditional browsers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">Download Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                  <Link href="/roadmap">
                    View Roadmap <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
