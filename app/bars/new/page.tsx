import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Beer, Search, Users, Clock, Calendar, Filter } from "lucide-react"
import Link from "next/link"

// Sample data for new bars
const newBars = [
  {
    id: 101,
    name: "Solana Gaming Guild",
    description: "For gamers building and playing on the Solana blockchain",
    members: 342,
    created: "2 days ago",
    date: "Apr 11, 2023",
    topics: ["Gaming", "GameFi", "Web3"],
    image: "/placeholder.svg?height=80&width=80&query=gaming%20controller%20amber",
  },
  {
    id: 102,
    name: "Mobile dApp Developers",
    description: "Building mobile-first decentralized applications on Solana",
    members: 287,
    created: "3 days ago",
    date: "Apr 10, 2023",
    topics: ["Mobile", "Development", "dApps"],
    image: "/placeholder.svg?height=80&width=80&query=mobile%20app%20development%20amber",
  },
  {
    id: 103,
    name: "Solana AI Projects",
    description: "Exploring the intersection of AI and blockchain on Solana",
    members: 412,
    created: "4 days ago",
    date: "Apr 9, 2023",
    topics: ["AI", "Machine Learning", "Data"],
    image: "/placeholder.svg?height=80&width=80&query=artificial%20intelligence%20amber",
  },
  {
    id: 104,
    name: "Solana Governance Hub",
    description: "Discussions about DAOs and governance models on Solana",
    members: 198,
    created: "5 days ago",
    date: "Apr 8, 2023",
    topics: ["Governance", "DAOs", "Voting"],
    image: "/placeholder.svg?height=80&width=80&query=governance%20voting%20amber",
  },
  {
    id: 105,
    name: "Solana Security Experts",
    description: "Security best practices and auditing for Solana projects",
    members: 231,
    created: "6 days ago",
    date: "Apr 7, 2023",
    topics: ["Security", "Auditing", "Best Practices"],
    image: "/placeholder.svg?height=80&width=80&query=security%20lock%20amber",
  },
  {
    id: 106,
    name: "NFT Creators Collective",
    description: "For artists and creators building NFTs on Solana",
    members: 376,
    created: "1 week ago",
    date: "Apr 6, 2023",
    topics: ["NFTs", "Art", "Creation"],
    image: "/placeholder.svg?height=80&width=80&query=digital%20art%20creation%20amber",
  },
]

export default function NewBarsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Newly Created Bars</h1>
              <p className="text-xl text-gray-400 mb-6">
                Discover fresh community spaces and be among the first to join
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="relative w-full max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search for new bars..."
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

        {/* New Bars Section */}
        <section className="py-12 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-white">Recently Created</h2>
                <span className="ml-3 inline-flex items-center rounded-full bg-amber-600/20 px-2.5 py-0.5 text-xs font-medium text-amber-500">
                  Last 7 days
                </span>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="text-white border-[#2d2d3a]">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newBars.map((bar) => (
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
                        <div className="flex items-center mb-1">
                          <h3 className="text-xl font-medium text-white">{bar.name}</h3>
                          <span className="ml-2 inline-flex items-center rounded-full bg-green-600/20 px-2 py-0.5 text-xs font-medium text-green-500">
                            New
                          </span>
                        </div>
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
                            <span>{bar.members}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Clock className="h-3.5 w-3.5 mr-1" />
                            <span>{bar.created}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#2d2d3a] flex justify-between items-center">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>Created: {bar.date}</span>
                      </div>
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

        {/* Why Join New Bars Section */}
        <section className="py-12 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Why Join New Bars?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Being an early member of a community comes with unique benefits and opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Shape the Community</h3>
                  <p className="text-gray-400">
                    Early members have a stronger voice in establishing community norms and direction
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <Beer className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Special Rewards</h3>
                  <p className="text-gray-400">
                    Early adopters often receive exclusive rewards, roles, and recognition
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Fresh Perspectives</h3>
                  <p className="text-gray-400">
                    New communities bring fresh ideas and innovative approaches to discussions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Have a Great Idea for a Community?</h2>
              <p className="text-gray-400 mb-6">
                Create your own bar and start building a community around your interests or project.
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
