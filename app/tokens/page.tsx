import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Globe, Layers, RefreshCw, Search } from "lucide-react"
import Link from "next/link"

export default function BlockchainBrowsingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blockchain Browsing</h1>
              <p className="text-xl text-gray-400 mb-8">
                Navigate the web through decentralized nodes with Cheers' revolutionary blockchain browsing technology
                powered by Solana.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">
                    <Download className="mr-2 h-5 w-5" /> Download Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                  <Link href="#how-it-works">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Blockchain Browsing */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">What is Blockchain Browsing?</h2>
              <p className="text-gray-400 mb-8">
                Blockchain browsing is a revolutionary approach to web navigation that uses decentralized blockchain
                technology instead of traditional centralized servers and protocols. With Cheers, you browse the web
                through a network of Solana validator nodes that verify and deliver content without the need for
                conventional browsers.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src="/solana-amber-explorer.png"
                  alt="Blockchain Browsing Concept"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400">
                Traditional browsing relies on centralized DNS servers, HTTP protocols, and browser engines that act as
                intermediaries between you and web content. Blockchain browsing eliminates these intermediaries,
                creating a direct, secure, and censorship-resistant connection to the web through Solana's
                high-performance blockchain.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How Blockchain Browsing Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cheers leverages Solana's high-performance blockchain to create a decentralized browsing experience
                that's faster, more secure, and truly private.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-4">
                    <Card className="bg-[#252530] border-0">
                      <CardContent className="p-6">
                        <Search className="h-10 w-10 text-amber-600 mb-4" />
                        <h4 className="text-lg font-medium text-white mb-2">Decentralized Content Discovery</h4>
                        <p className="text-gray-400">
                          Instead of using centralized search engines, Cheers discovers content through a decentralized
                          index maintained by the Solana blockchain, ensuring unbiased and uncensored results.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#252530] border-0">
                      <CardContent className="p-6">
                        <Globe className="h-10 w-10 text-amber-500 mb-4" />
                        <h4 className="text-lg font-medium text-white mb-2">Peer-to-Peer Content Delivery</h4>
                        <p className="text-gray-400">
                          Content is delivered directly from source to user through a network of validator nodes,
                          eliminating the need for centralized content delivery networks and reducing latency.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#252530] border-0">
                      <CardContent className="p-6">
                        <Layers className="h-10 w-10 text-amber-400 mb-4" />
                        <h4 className="text-lg font-medium text-white mb-2">Blockchain Verification</h4>
                        <p className="text-gray-400">
                          All content is cryptographically verified by the Solana blockchain, ensuring authenticity and
                          preventing tampering or man-in-the-middle attacks common in traditional browsing.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#252530] border-0">
                      <CardContent className="p-6">
                        <RefreshCw className="h-10 w-10 text-amber-300 mb-4" />
                        <h4 className="text-lg font-medium text-white mb-2">Real-time Updates</h4>
                        <p className="text-gray-400">
                          Content updates are propagated through the blockchain in real-time, ensuring you always have
                          the latest information without refreshing or reloading pages.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/solana-amber-network.png"
                  alt="Blockchain Browsing Diagram"
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Benefits of Blockchain Browsing</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover why thousands of users are switching to blockchain browsing with Cheers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-amber-600/20 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Censorship Resistance</h3>
                  <p className="text-gray-400">
                    Access content without restrictions or censorship. Blockchain browsing ensures that no central
                    authority can block or filter your access to information.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                    <Layers className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Enhanced Privacy</h3>
                  <p className="text-gray-400">
                    Browse without being tracked. Your browsing data is encrypted and secured by blockchain technology,
                    not stored on central servers or used for targeted advertising.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                    <RefreshCw className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Improved Performance</h3>
                  <p className="text-gray-400">
                    Experience faster loading times and smoother browsing. Solana's high-throughput blockchain enables
                    content delivery that's up to 10x faster than traditional browsers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Experience the Future of Web Navigation</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the blockchain browsing revolution with Cheers and discover a faster, more secure, and truly
                private way to explore the web.
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
