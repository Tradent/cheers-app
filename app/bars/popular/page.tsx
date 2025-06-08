import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Beer, Search, Users, MessageSquare, Star, TrendingUp, Filter } from "lucide-react"
import Link from "next/link"

// Sample data for popular bars
const popularBars = [
  {
    id: 1,
    name: "Solana Speakeasy",
    description: "The original Solana community hangout for developers and enthusiasts",
    members: 12453,
    activity: "Very High",
    topics: ["Development", "NFTs", "DeFi"],
    image: "/amber-solana.png",
  },
  {
    id: 2,
    name: "NFT Brewery",
    description: "Discuss, showcase, and trade the latest NFT collections on Solana",
    members: 8721,
    activity: "High",
    topics: ["NFTs", "Art", "Trading"],
    image: "/fossilized-future.png",
  },
  {
    id: 3,
    name: "DeFi Distillery",
    description: "Strategies, protocols, and yield farming discussions for Solana DeFi",
    members: 7654,
    activity: "High",
    topics: ["DeFi", "Yield", "Trading"],
    image: "/abstract-defi-amber.png",
  },
  {
    id: 4,
    name: "Validator Tavern",
    description: "For Solana validators and those interested in network infrastructure",
    members: 4532,
    activity: "Medium",
    topics: ["Validators", "Technical", "Network"],
    image: "/blockchain-validator-abstract.png",
  },
  {
    id: 5,
    name: "Metaverse Alehouse",
    description: "Exploring virtual worlds, gaming, and metaverse projects on Solana",
    members: 6234,
    activity: "High",
    topics: ["Metaverse", "Gaming", "Virtual Worlds"],
    image: "/virtual-amber-fragment.png",
  },
  {
    id: 6,
    name: "Solana Developers Pub",
    description: "Technical discussions, code sharing, and developer resources",
    members: 5876,
    activity: "Very High",
    topics: ["Development", "Programming", "Tools"],
    image: "/code-development-amber-glow.png",
  },
  {
    id: 7,
    name: "Crypto Traders Bar",
    description: "Trading strategies, market analysis, and price discussions",
    members: 9821,
    activity: "Very High",
    topics: ["Trading", "Markets", "Analysis"],
    image: "/crypto-amber-abstract.png",
  },
  {
    id: 8,
    name: "Blockchain Basics Bistro",
    description: "Newcomer-friendly space for learning about blockchain and Solana",
    members: 7123,
    activity: "Medium",
    topics: ["Education", "Beginners", "Guides"],
    image: "/blockchain-education-amber-glow.png",
  },
]

export default function PopularBarsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Bars</h1>
              <p className="text-xl text-gray-400 mb-6">
                Join the most active community spaces in the Cheers browserless ecosystem
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="relative w-full max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search for bars..."
                    className="pl-10 bg-[#252530] border-[#2d2d3a] text-white"
                  />
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/bars/create">
                    <Beer className="mr-2 h-4 w-4" /> Create Bar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bars Section */}
        <section className="py-12 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <Tabs defaultValue="trending" className="w-full max-w-md mx-auto md:mx-0">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="members">Most Members</TabsTrigger>
                  <TabsTrigger value="active">Most Active</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="text-white border-[#2d2d3a]">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBars.map((bar) => (
                <Card key={bar.id} className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={bar.image || "/placeholder.svg"}
                          alt={bar.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">{bar.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{bar.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {bar.topics.map((topic, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full bg-amber-600/20 px-2.5 py-0.5 text-xs font-medium text-amber-500"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Users className="h-3.5 w-3.5 mr-1" />
                            <span>{bar.members.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MessageSquare className="h-3.5 w-3.5 mr-1" />
                            <span>{bar.activity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#2d2d3a] flex justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-amber-500 hover:text-amber-400 hover:bg-amber-600/10"
                      >
                        <Star className="h-4 w-4 mr-1" /> Favorite
                      </Button>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white" size="sm" asChild>
                        <Link href={`/bars/${bar.id}`}>Join Bar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]">
                Load More Bars
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Bar */}
        <section className="py-12 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Featured Bar of the Week</h2>
              <p className="text-gray-400">Highlighted for exceptional community engagement and content</p>
            </div>

            <Card className="bg-gradient-to-r from-amber-950/70 to-amber-900/70 border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="h-40 w-40 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="/solana-code-glow.png"
                      alt="Solana Developers Pub"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center rounded-full bg-amber-600/30 px-3 py-1 text-sm text-amber-500 mb-3">
                      <TrendingUp className="h-3.5 w-3.5 mr-1" /> Trending
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Solana Developers Pub</h3>
                    <p className="text-gray-300 mb-4">
                      The premier destination for Solana developers to share knowledge, collaborate on projects, and
                      build the future of decentralized applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-amber-600/20 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                        Development
                      </span>
                      <span className="inline-flex items-center rounded-full bg-amber-600/20 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                        Programming
                      </span>
                      <span className="inline-flex items-center rounded-full bg-amber-600/20 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                        Tools
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                        <Link href="/bars/6">Join Featured Bar</Link>
                      </Button>
                      <Button variant="outline" className="border-amber-600/50 text-amber-500 hover:bg-amber-600/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-400 mb-6">
                Create your own community bar and invite others to join the conversation.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                <Link href="/bars/create">
                  <Beer className="mr-2 h-4 w-4" /> Create Your Own Bar
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
