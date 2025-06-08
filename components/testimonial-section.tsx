import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-20 bg-[#1a1a24]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What Users Are Saying</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have made the switch to browserless browsing with Cheers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-[#252530] border-0">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "I never thought browsing could be this fast and secure. The browserless technology is revolutionary,
                and the Solana integration makes everything seamless."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <p className="font-medium text-white">Alex Johnson</p>
                  <p className="text-sm text-gray-400">Web3 Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#252530] border-0">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The community bars feature is amazing! I've connected with so many like-minded blockchain enthusiasts
                and earned rewards just for browsing. Cheers is a game-changer."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <p className="font-medium text-white">Sarah Williams</p>
                  <p className="text-sm text-gray-400">NFT Collector</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#252530] border-0">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "As someone concerned about privacy, Cheers has been a breath of fresh air. No more tracking, no more
                ads, just pure decentralized browsing powered by Solana."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <p className="font-medium text-white">Michael Chen</p>
                  <p className="text-sm text-gray-400">Privacy Advocate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
