import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Book, Code, FileText, Terminal, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Documentation</h1>
              <p className="text-xl text-gray-400 mb-8">
                Everything you need to know about building with Cheers browserless technology
              </p>
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-10 bg-[#1a1a24] border-[#2d2d3a] text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-12">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="sdk">SDK</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
              </TabsList>

              <TabsContent value="guides">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/docs/getting-started" className="block">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 h-full hover:border-amber-600 transition-colors">
                      <Book className="h-10 w-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Getting Started</h3>
                      <p className="text-gray-400">
                        Learn the basics of Cheers browser and set up your development environment.
                      </p>
                    </div>
                  </Link>

                  <Link href="/docs/browserless" className="block">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 h-full hover:border-amber-600 transition-colors">
                      <Terminal className="h-10 w-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Browserless Technology</h3>
                      <p className="text-gray-400">Understand how our Solana-powered browserless technology works.</p>
                    </div>
                  </Link>

                  <Link href="/docs/bars" className="block">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 h-full hover:border-amber-600 transition-colors">
                      <FileText className="h-10 w-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Bars & Communities</h3>
                      <p className="text-gray-400">
                        Learn how to create and manage community bars in the Cheers ecosystem.
                      </p>
                    </div>
                  </Link>

                  <Link href="/docs/wallet-integration" className="block">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 h-full hover:border-amber-600 transition-colors">
                      <Code className="h-10 w-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Wallet Integration</h3>
                      <p className="text-gray-400">
                        Connect Solana wallets and manage transactions in your applications.
                      </p>
                    </div>
                  </Link>

                  <Link href="/docs/taps" className="block">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 h-full hover:border-amber-600 transition-colors">
                      <Terminal className="h-10 w-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Building Taps</h3>
                      <p className="text-gray-400">Create custom taps to extend the functionality of Cheers browser.</p>
                    </div>
                  </Link>

                  <Link href="/docs/security" className="block">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 h-full hover:border-amber-600 transition-colors">
                      <FileText className="h-10 w-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                      <p className="text-gray-400">
                        Best practices for building secure applications on the Cheers platform.
                      </p>
                    </div>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="api">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">API Reference</h3>
                    <p className="text-gray-400 mb-4">
                      Comprehensive documentation for the Cheers API endpoints, parameters, and responses.
                    </p>
                    <Link href="/developers/api">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">View API Documentation</Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">REST API</h4>
                      <p className="text-gray-400 mb-4">
                        Access Cheers browser data and functionality through our RESTful API endpoints.
                      </p>
                      <Link href="/developers/api#rest">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">GraphQL API</h4>
                      <p className="text-gray-400 mb-4">
                        Query exactly what you need with our flexible GraphQL API interface.
                      </p>
                      <Link href="/developers/api#graphql">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sdk">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">SDK Documentation</h3>
                    <p className="text-gray-400 mb-4">
                      Learn how to use the Cheers SDK to build applications for various platforms.
                    </p>
                    <Link href="/developers/sdk">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">View SDK Documentation</Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">JavaScript SDK</h4>
                      <p className="text-gray-400 mb-4">Build web applications with our JavaScript SDK.</p>
                      <Link href="/developers/sdk#javascript">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Python SDK</h4>
                      <p className="text-gray-400 mb-4">Integrate Cheers with your Python applications.</p>
                      <Link href="/developers/sdk#python">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Rust SDK</h4>
                      <p className="text-gray-400 mb-4">Build high-performance applications with our Rust SDK.</p>
                      <Link href="/developers/sdk#rust">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="examples">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Creating a Bar</h4>
                      <p className="text-gray-400 mb-4">
                        Step-by-step guide to creating a community bar with the Cheers SDK.
                      </p>
                      <div className="bg-[#1a1a24] rounded-lg p-4 mb-4">
                        <pre className="text-amber-400 overflow-x-auto text-sm">
                          <code>{`import { CheersBrowser } from '@cheers-browser/sdk';

const cheers = new CheersBrowser({
  apiKey: 'your-api-key',
});

// Create a new bar
const newBar = await cheers.bars.create({
  name: 'My Awesome Bar',
  description: 'A place for awesome discussions',
  isPrivate: false,
});`}</code>
                        </pre>
                      </div>
                      <Link href="/docs/examples/create-bar">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          View Full Example <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-[#252530] border border-[#2d2d3a] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Wallet Integration</h4>
                      <p className="text-gray-400 mb-4">Example of integrating Solana wallets with your application.</p>
                      <div className="bg-[#1a1a24] rounded-lg p-4 mb-4">
                        <pre className="text-amber-400 overflow-x-auto text-sm">
                          <code>{`import { CheersBrowser } from '@cheers-browser/sdk';

const cheers = new CheersBrowser();

// Connect to wallet
const connection = await cheers.wallet.connect();

// Get wallet balance
const balance = await cheers.wallet.getBalance();
console.log(\`Balance: \${balance} SOL\`);`}</code>
                        </pre>
                      </div>
                      <Link href="/docs/examples/wallet-integration">
                        <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                          View Full Example <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Getting Started with Cheers SDK</h3>
                <p className="text-gray-400 mb-4">
                  Learn how to install and configure the Cheers SDK for your development environment.
                </p>
                <Link href="/docs/sdk/getting-started">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Creating Your First Bar</h3>
                <p className="text-gray-400 mb-4">
                  Step-by-step guide to creating and configuring your first community bar.
                </p>
                <Link href="/docs/tutorials/first-bar">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Authentication and Authorization</h3>
                <p className="text-gray-400 mb-4">
                  Learn how to implement secure authentication in your Cheers applications.
                </p>
                <Link href="/docs/guides/auth">
                  <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <h3 className="text-xl font-bold text-white mb-4">Solana Integration</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive guide to integrating Solana blockchain features in your application.
                </p>
                <Link href="/docs/guides/solana">
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
      <Footer />
    </div>
  )
}
