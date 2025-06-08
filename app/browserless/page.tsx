import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Globe, Lock, Zap, Database, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function BrowserlessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Browserless Technology</h1>
              <p className="text-xl text-gray-400 mb-8">
                Discover how Cheers is revolutionizing web browsing by eliminating the traditional browser and
                connecting you directly to the decentralized web through Solana blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">
                    <Download className="mr-2 h-5 w-5" /> Download Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                  <Link href="#how-it-works">
                    Learn How It Works <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Browserless Section */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">What is a Browserless Browser?</h2>
              <p className="text-gray-400 mb-8">
                A browserless browser is a revolutionary approach to web navigation that eliminates the traditional
                browser interface and engine, replacing it with a decentralized system powered by blockchain technology.
                Instead of relying on centralized servers and conventional web protocols, Cheers leverages Solana's
                high-performance blockchain to create a truly decentralized browsing experience.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src="/solana-amber-browser.png"
                  alt="Browserless Browser Concept"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400">
                Traditional browsers act as intermediaries between you and the web, collecting data, imposing
                limitations, and creating security vulnerabilities. Cheers removes this intermediary, allowing you to
                connect directly to content through a network of decentralized nodes secured by Solana's blockchain
                technology.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How Browserless Technology Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cheers leverages Solana's high-performance blockchain to create a decentralized browsing experience
                unlike anything you've seen before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/browserless-solana-amber.png"
                  alt="Browserless Technology Diagram"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <Globe className="h-10 w-10 text-amber-600 mb-4" />
                      <h4 className="text-lg font-medium text-white mb-2">Decentralized Access</h4>
                      <p className="text-gray-400">
                        Instead of using a traditional browser engine to render web content, Cheers accesses content
                        through a network of decentralized nodes on the Solana blockchain. This eliminates central
                        points of failure and censorship.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <Lock className="h-10 w-10 text-amber-500 mb-4" />
                      <h4 className="text-lg font-medium text-white mb-2">Blockchain Security</h4>
                      <p className="text-gray-400">
                        Your browsing data is secured by Solana's cryptographic protocols. Unlike traditional browsers
                        that store your data on central servers, Cheers keeps your information secure and private
                        through blockchain technology.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <Zap className="h-10 w-10 text-amber-400 mb-4" />
                      <h4 className="text-lg font-medium text-white mb-2">Lightning Speed</h4>
                      <p className="text-gray-400">
                        Solana's high-throughput blockchain enables browsing speeds up to 10x faster than traditional
                        browsers. With 65,000 transactions per second, content loads instantly without the overhead of
                        conventional browser engines.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <Database className="h-10 w-10 text-amber-300 mb-4" />
                      <h4 className="text-lg font-medium text-white mb-2">Web3 Native</h4>
                      <p className="text-gray-400">
                        Seamlessly interact with dApps, NFTs, and tokens without additional extensions or wallets.
                        Cheers is built for the decentralized web from the ground up, making Web3 interactions natural
                        and intuitive.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Technical Specifications</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Solana Integration</h3>
                    <p className="text-gray-400">
                      Built on Solana's high-performance blockchain with 65,000 TPS and 400ms block times, enabling
                      near-instant content loading and interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Decentralized Content Delivery</h3>
                    <p className="text-gray-400">
                      Content is accessed through a network of validator nodes that verify and deliver web content
                      without central servers or traditional DNS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Cryptographic Security</h3>
                    <p className="text-gray-400">
                      All browsing data is encrypted using advanced cryptographic protocols, ensuring your privacy and
                      security without relying on conventional security measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Web3 Native Architecture</h3>
                    <p className="text-gray-400">
                      Built from the ground up for the decentralized web, with native support for blockchain
                      interactions, smart contracts, and token-based authentication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Browserless Browsing?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of users already exploring the metaverse without the limitations of traditional browsers.
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
