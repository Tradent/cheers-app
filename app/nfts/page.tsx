import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Wallet, ImageIcon, Coins, Code } from "lucide-react"
import Link from "next/link"

export default function Web3IntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Web3 Integration</h1>
              <p className="text-xl text-gray-400 mb-8">
                Seamlessly connect with your digital assets and the decentralized web through Cheers' native Web3
                integration powered by Solana.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">
                    <Download className="mr-2 h-5 w-5" /> Download Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                  <Link href="#features">
                    Explore Features <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Web3 Integration */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Seamless Web3 Integration</h2>
              <p className="text-gray-400 mb-8">
                Cheers is built from the ground up for Web3, offering native integration with blockchain technologies,
                digital assets, and decentralized applications. Unlike traditional browsers that require extensions and
                third-party wallets, Cheers provides a seamless, built-in connection to the decentralized web.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img src="/solana-web3-amber.png" alt="Web3 Integration" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400">
                With Cheers, your digital identity, assets, and interactions are secured by Solana's blockchain
                technology, creating a unified browsing experience that bridges the gap between the traditional web and
                the emerging decentralized ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Web3 Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how Cheers integrates with the decentralized web to provide a seamless browsing experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Wallet className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Built-in Wallet</h3>
                  <p className="text-gray-400 mb-4">
                    Cheers comes with a built-in Solana wallet that securely stores your digital assets and identity. No
                    need for browser extensions or third-party applications.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Secure key management with hardware security module support
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Multi-signature transaction support
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Seamless transaction signing without popups or confirmations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <ImageIcon className="h-12 w-12 text-amber-500 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">NFT Gallery</h3>
                  <p className="text-gray-400 mb-4">
                    View, manage, and interact with your NFT collection directly in Cheers. Your digital art and
                    collectibles are always at your fingertips.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      High-resolution NFT rendering with metadata support
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      One-click NFT transfers and marketplace integration
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Interactive 3D NFT support for immersive experiences
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Coins className="h-12 w-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">Token Management</h3>
                  <p className="text-gray-400 mb-4">
                    Manage your tokens and cryptocurrencies with ease. Cheers provides real-time balances, transaction
                    history, and seamless transfers.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Support for all Solana tokens and SPL standards
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Real-time price tracking and portfolio analytics
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      One-click swaps and liquidity provision
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 text-amber-300 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">dApp Integration</h3>
                  <p className="text-gray-400 mb-4">
                    Access decentralized applications directly within Cheers. No more switching between apps or dealing
                    with complex connection processes.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Native support for all Solana dApps without extensions
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Secure permission management for dApp connections
                    </li>
                    <li className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
                      Integrated dApp discovery and recommendations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Web3 Use Cases</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how Cheers' Web3 integration transforms your digital experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src="/placeholder.svg?height=225&width=400&query=NFT%20marketplace%20on%20solana%20amber%20theme"
                      alt="NFT Marketplace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">NFT Marketplaces</h3>
                  <p className="text-gray-400">
                    Browse, buy, and sell NFTs directly within Cheers. View high-resolution previews, check
                    authenticity, and complete transactions without leaving your browser.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src="/placeholder.svg?height=225&width=400&query=DeFi%20platforms%20on%20solana%20amber%20theme"
                      alt="DeFi Platforms"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">DeFi Platforms</h3>
                  <p className="text-gray-400">
                    Access decentralized finance protocols with ease. Swap tokens, provide liquidity, and earn yield
                    with seamless integration and real-time analytics.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src="/placeholder.svg?height=225&width=400&query=DAO%20governance%20on%20solana%20amber%20theme"
                      alt="DAO Governance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">DAO Governance</h3>
                  <p className="text-gray-400">
                    Participate in decentralized autonomous organizations. Vote on proposals, delegate your voting
                    power, and track governance activities all within Cheers.
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
              <h2 className="text-3xl font-bold text-white mb-6">Experience Seamless Web3 Integration</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of users already enjoying the benefits of native Web3 integration with Cheers.
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
