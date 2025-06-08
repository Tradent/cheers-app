import { Card, CardContent } from "@/components/ui/card"
import { Beer, Code, Gift, Shield, Zap, Globe } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-20 bg-[#0e0e13]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Cheers Browserless?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our Solana-powered browserless technology combines powerful features with a user-friendly interface to
            provide the best experience for exploring the decentralized web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Access content through a network of decentralized nodes, bypassing censorship and central points of
                  failure.
                </p>
              </div>
            </CardContent>
          </Card>

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
  )
}
