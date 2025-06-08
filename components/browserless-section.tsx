import { Card, CardContent } from "@/components/ui/card"
import { Globe, Lock, Zap, Database } from "lucide-react"

export function BrowserlessSection() {
  return (
    <section className="py-20 bg-[#1a1a24]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What is a Browserless Browser?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cheers redefines web navigation by eliminating the traditional browser and connecting you directly to the
            decentralized web through Solana blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/browserless-diagram.png"
              alt="Browserless Technology Diagram"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
              <p className="text-gray-400">
                Unlike traditional browsers that rely on centralized servers and protocols, Cheers leverages Solana's
                high-performance blockchain to create a decentralized browsing experience:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Globe className="h-10 w-10 text-amber-600 mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">Decentralized Access</h4>
                  <p className="text-gray-400">
                    Content is accessed through a network of nodes rather than through a traditional browser engine.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Lock className="h-10 w-10 text-amber-500 mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">Blockchain Security</h4>
                  <p className="text-gray-400">
                    Your browsing data is secured by Solana's cryptographic protocols, not stored on central servers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Zap className="h-10 w-10 text-amber-400 mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">Lightning Speed</h4>
                  <p className="text-gray-400">
                    Solana's high-throughput blockchain enables browsing speeds faster than traditional browsers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <Database className="h-10 w-10 text-amber-300 mb-4" />
                  <h4 className="text-lg font-medium text-white mb-2">Web3 Native</h4>
                  <p className="text-gray-400">
                    Seamlessly interact with dApps, NFTs, and tokens without additional extensions or wallets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
