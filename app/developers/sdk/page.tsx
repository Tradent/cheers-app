import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Code, Download, Github, Package, Layers, Cpu, Zap } from "lucide-react"

export default function SdkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0e0e13] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Browser SDK</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful applications with our comprehensive SDK for the Cheers browserless ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Download className="mr-2 h-4 w-4" /> Download SDK
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 to-transparent pointer-events-none" />
        </section>

        {/* SDK Features */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">SDK Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Package className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Multiple Languages</h3>
                <p className="text-gray-300">
                  Available for JavaScript, Python, Rust, and more to support your preferred development environment.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Layers className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Modular Architecture</h3>
                <p className="text-gray-300">
                  Import only what you need with our modular design to keep your applications lightweight.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Cpu className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Solana Integration</h3>
                <p className="text-gray-300">
                  Seamless integration with Solana blockchain for transactions, wallet connections, and more.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Code className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">TypeScript Support</h3>
                <p className="text-gray-300">
                  Full TypeScript definitions for improved developer experience and code quality.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Zap className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Performance Optimized</h3>
                <p className="text-gray-300">
                  Built for speed and efficiency with minimal overhead for your applications.
                </p>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                <Github className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                <p className="text-gray-300">
                  Fully open source with an active community of contributors and regular updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Quick Start</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Installation</h3>
                <div className="bg-[#252530] rounded-lg p-4 mb-6">
                  <pre className="text-amber-400 overflow-x-auto">
                    <code>npm install @cheers-browser/sdk</code>
                  </pre>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Initialize the SDK</h3>
                <div className="bg-[#252530] rounded-lg p-4">
                  <pre className="text-amber-400 overflow-x-auto">
                    <code>{`import { CheersBrowser } from '@cheers-browser/sdk';

const cheers = new CheersBrowser({
  apiKey: 'your-api-key',
  network: 'mainnet',
});

// Connect to wallet
await cheers.connect();`}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Create a Bar</h3>
                <div className="bg-[#252530] rounded-lg p-4 mb-6">
                  <pre className="text-amber-400 overflow-x-auto">
                    <code>{`// Create a new community bar
const newBar = await cheers.bars.create({
  name: 'My Awesome Bar',
  description: 'A place for awesome discussions',
  isPrivate: false,
  tags: ['tech', 'blockchain', 'solana'],
});

console.log(\`Bar created with ID: \${newBar.id}\`);`}</code>
                  </pre>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Listen for Events</h3>
                <div className="bg-[#252530] rounded-lg p-4">
                  <pre className="text-amber-400 overflow-x-auto">
                    <code>{`// Subscribe to new messages in a bar
cheers.bars.subscribe(barId, (message) => {
  console.log(\`New message: \${message.content}\`);
});`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Versions */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Available SDKs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a] text-center">
                <h3 className="text-xl font-bold text-white mb-2">JavaScript</h3>
                <p className="text-gray-300 mb-4">v1.2.0</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Download</Button>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a] text-center">
                <h3 className="text-xl font-bold text-white mb-2">Python</h3>
                <p className="text-gray-300 mb-4">v1.1.5</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Download</Button>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a] text-center">
                <h3 className="text-xl font-bold text-white mb-2">Rust</h3>
                <p className="text-gray-300 mb-4">v0.9.2</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Download</Button>
              </div>
              <div className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a] text-center">
                <h3 className="text-xl font-bold text-white mb-2">Go</h3>
                <p className="text-gray-300 mb-4">v0.8.0</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Download</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Building Today</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our developer community and start building decentralized applications on the Cheers platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
