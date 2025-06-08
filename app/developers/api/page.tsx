import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Code, Terminal, Key, Lock, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0e0e13] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Browser API</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, flexible, and secure APIs for integrating with the Cheers browserless ecosystem on Solana
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Get API Keys
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 to-transparent pointer-events-none" />
        </section>

        {/* API Features */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">API Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Terminal className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">RESTful Endpoints</h3>
                <p className="text-gray-300">
                  Access Cheers browser data and functionality through our comprehensive RESTful API endpoints.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Key className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Authentication</h3>
                <p className="text-gray-300">
                  Secure API access with API keys, OAuth 2.0, and Solana wallet signature authentication.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Lock className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Rate Limiting</h3>
                <p className="text-gray-300">
                  Fair usage policies with tiered rate limits based on your subscription plan.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Shield className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                <p className="text-gray-300">
                  Enterprise-grade security with TLS encryption and data protection measures.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Code className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Webhooks</h3>
                <p className="text-gray-300">
                  Real-time event notifications for seamless integration with your applications.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Zap className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
                <p className="text-gray-300">
                  High-performance API with low latency and high throughput for demanding applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">API Reference</h2>
            <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Endpoints Overview</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-[#252530] rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-3">GET</span>
                        <code className="text-amber-400">/api/v1/bars</code>
                      </div>
                      <span className="text-gray-400 text-sm">List all bars</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#252530] rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mr-3">GET</span>
                        <code className="text-amber-400">/api/v1/bars/{"{id}"}</code>
                      </div>
                      <span className="text-gray-400 text-sm">Get bar details</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#252530] rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">POST</span>
                        <code className="text-amber-400">/api/v1/bars</code>
                      </div>
                      <span className="text-gray-400 text-sm">Create a new bar</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#252530] rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded mr-3">PUT</span>
                        <code className="text-amber-400">/api/v1/bars/{"{id}"}</code>
                      </div>
                      <span className="text-gray-400 text-sm">Update a bar</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#252530] rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-3">DELETE</span>
                        <code className="text-amber-400">/api/v1/bars/{"{id}"}</code>
                      </div>
                      <span className="text-gray-400 text-sm">Delete a bar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#2d2d3a] p-6">
                <Link href="/developers/docs">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    View Full API Documentation
                  </Button>
                </Link>
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
                Register for API Access
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
