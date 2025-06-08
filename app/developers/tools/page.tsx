import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Wrench, Terminal, Code, Database, Wallet, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0e0e13] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Developer Tools</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful tools to build, test, and deploy applications on the Cheers browserless ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Explore Tools
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 to-transparent pointer-events-none" />
        </section>

        {/* Tools Categories */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Terminal className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">CLI Tools</h3>
                <p className="text-gray-300 mb-4">
                  Command-line tools for managing your Cheers applications and interacting with the Solana blockchain.
                </p>
                <Link href="/developers/tools/cli">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Code className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">IDE Extensions</h3>
                <p className="text-gray-300 mb-4">
                  Extensions for popular IDEs like VS Code and JetBrains to enhance your development workflow.
                </p>
                <Link href="/developers/tools/extensions">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Database className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Development</h3>
                <p className="text-gray-300 mb-4">
                  Set up a local development environment with simulated Solana blockchain for testing.
                </p>
                <Link href="/developers/tools/local-dev">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Wallet className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Wallet Simulator</h3>
                <p className="text-gray-300 mb-4">
                  Test your applications with simulated wallets and transactions without using real funds.
                </p>
                <Link href="/developers/tools/wallet-simulator">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <BarChart className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Monitor your application's performance and user engagement with detailed analytics.
                </p>
                <Link href="/developers/tools/analytics">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Wrench className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Debugging Tools</h3>
                <p className="text-gray-300 mb-4">
                  Advanced debugging tools for troubleshooting issues in your Cheers applications.
                </p>
                <Link href="/developers/tools/debugging">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tool */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Tool</h2>
            <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Cheers Inspector</h3>
                  <p className="text-gray-300 mb-6">
                    A powerful browser extension for inspecting and debugging Solana transactions and smart contracts in
                    real-time.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Real-time transaction monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Smart contract visualization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Network performance metrics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Error detection and troubleshooting</span>
                    </li>
                  </ul>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Download Inspector</Button>
                </div>
                <div className="bg-[#252530] flex items-center justify-center p-8">
                  <div className="bg-[#1a1a24] border border-[#2d2d3a] rounded-lg w-full h-64 flex items-center justify-center">
                    <p className="text-amber-500 text-lg">Inspector Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Cheers?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our developer community and start building decentralized applications on the Cheers platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join Developer Community
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
