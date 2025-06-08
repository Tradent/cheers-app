import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Search, Book, FileText, Code, Terminal, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0e0e13] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Documentation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, references, and examples for the Cheers browserless ecosystem
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-full pl-10 bg-[#1a1a24] border-[#2d2d3a] text-white"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 to-transparent pointer-events-none" />
        </section>

        {/* Documentation Categories */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Documentation Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Book className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Getting Started</h3>
                <p className="text-gray-300 mb-4">
                  Learn the basics of the Cheers browser ecosystem and set up your development environment.
                </p>
                <Link href="/developers/docs/getting-started">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read guide <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <FileText className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">API Reference</h3>
                <p className="text-gray-300 mb-4">
                  Complete reference documentation for the Cheers API endpoints and parameters.
                </p>
                <Link href="/developers/docs/api-reference">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    View reference <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Code className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">SDK Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Learn how to use the Cheers SDK to build applications for various platforms.
                </p>
                <Link href="/developers/docs/sdk">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Explore SDK <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Terminal className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Tutorials</h3>
                <p className="text-gray-300 mb-4">
                  Step-by-step tutorials for building applications with the Cheers platform.
                </p>
                <Link href="/developers/docs/tutorials">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Start learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <ExternalLink className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Integration Guides</h3>
                <p className="text-gray-300 mb-4">Learn how to integrate Cheers with other platforms and services.</p>
                <Link href="/developers/docs/integrations">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    View guides <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <FileText className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Examples</h3>
                <p className="text-gray-300 mb-4">Browse example projects and code snippets for common use cases.</p>
                <Link href="/developers/docs/examples">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    See examples <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Getting Started with Cheers SDK</h3>
                <p className="text-gray-300 mb-4">
                  Learn how to install and configure the Cheers SDK for your development environment.
                </p>
                <Link href="/developers/docs/sdk/getting-started">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Creating Your First Bar</h3>
                <p className="text-gray-300 mb-4">
                  Step-by-step guide to creating and configuring your first community bar.
                </p>
                <Link href="/developers/docs/tutorials/first-bar">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Authentication and Authorization</h3>
                <p className="text-gray-300 mb-4">
                  Learn how to implement secure authentication in your Cheers applications.
                </p>
                <Link href="/developers/docs/guides/auth">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Solana Integration</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive guide to integrating Solana blockchain features in your application.
                </p>
                <Link href="/developers/docs/guides/solana">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Join our developer community for support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
                Join Discord
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
