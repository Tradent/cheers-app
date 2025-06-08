import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Users, Vote, FileText, MessageSquare, ArrowRight } from "lucide-react"

export default function GovernancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Governance</h1>
              <p className="text-xl text-gray-400 mb-8">
                Help shape the future of Cheers through community-driven governance
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Vote className="mr-2 h-5 w-5" /> View Active Proposals
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]">
                  <FileText className="mr-2 h-5 w-5" /> Submit a Proposal
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How Governance Works */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">How Governance Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cheers is governed by its community through a transparent and decentralized process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#252530] border-0">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-600/20 p-4">
                      <FileText className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">1. Proposal Submission</h3>
                    <p className="text-gray-400">
                      Community members submit proposals for features, improvements, or changes to the Cheers ecosystem.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-500/20 p-4">
                      <MessageSquare className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">2. Discussion Period</h3>
                    <p className="text-gray-400">
                      The community discusses and refines proposals through forums and community bars for a minimum of 7
                      days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="pt-6 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-amber-400/20 p-4">
                      <Vote className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">3. Voting Period</h3>
                    <p className="text-gray-400">
                      Eligible community members vote on proposals, with voting power based on participation and
                      contribution.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Active Proposals */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Active Proposals</h2>
              <Button variant="outline" className="mt-4 md:mt-0 border-[#2d2d3a] text-white hover:bg-[#252530]">
                View All Proposals
              </Button>
            </div>

            <div className="space-y-6">
              {/* Proposal 1 */}
              <Card className="bg-[#252530] border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-amber-600 mb-2">Feature Request</Badge>
                      <CardTitle className="text-white">Mobile App Development Priority</CardTitle>
                      <CardDescription>
                        Proposal to prioritize mobile app development in the Q3 2024 roadmap
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                      <Clock className="h-3.5 w-3.5 mr-1" /> 3 days left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">Voting Progress</span>
                        <span className="text-sm text-gray-400">72% of quorum reached</span>
                      </div>
                      <Progress value={72} className="h-2 bg-[#1a1a24]" indicatorClassName="bg-amber-600" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-green-500">68%</div>
                        <div className="text-xs text-gray-400">In Favor</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-red-500">24%</div>
                        <div className="text-xs text-gray-400">Against</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-gray-400">8%</div>
                        <div className="text-xs text-gray-400">Abstain</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>1,245 votes cast</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] flex justify-between">
                  <Button variant="ghost" className="text-gray-400">
                    View Discussion (89 comments)
                  </Button>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Cast Vote</Button>
                </CardFooter>
              </Card>

              {/* Proposal 2 */}
              <Card className="bg-[#252530] border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-amber-600 mb-2">Integration</Badge>
                      <CardTitle className="text-white">Multi-Chain Support Expansion</CardTitle>
                      <CardDescription>Proposal to add support for Ethereum and Polygon blockchains</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                      <Clock className="h-3.5 w-3.5 mr-1" /> 5 days left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">Voting Progress</span>
                        <span className="text-sm text-gray-400">45% of quorum reached</span>
                      </div>
                      <Progress value={45} className="h-2 bg-[#1a1a24]" indicatorClassName="bg-amber-600" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-green-500">52%</div>
                        <div className="text-xs text-gray-400">In Favor</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-red-500">38%</div>
                        <div className="text-xs text-gray-400">Against</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-gray-400">10%</div>
                        <div className="text-xs text-gray-400">Abstain</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>876 votes cast</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] flex justify-between">
                  <Button variant="ghost" className="text-gray-400">
                    View Discussion (124 comments)
                  </Button>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Cast Vote</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Recently Passed Proposals */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Recently Passed Proposals</h2>
              <Button variant="outline" className="mt-4 md:mt-0 border-[#2d2d3a] text-white hover:bg-[#252530]">
                View Proposal History
              </Button>
            </div>

            <div className="space-y-6">
              {/* Passed Proposal 1 */}
              <Card className="bg-[#252530] border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-green-600 mb-2">Passed</Badge>
                      <CardTitle className="text-white">Community Bar Enhancements</CardTitle>
                      <CardDescription>
                        Improvements to community bar features including custom emojis and thread organization
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                      <CheckCircle className="h-3.5 w-3.5 mr-1" /> Implemented
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-green-500">78%</div>
                        <div className="text-xs text-gray-400">In Favor</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-red-500">15%</div>
                        <div className="text-xs text-gray-400">Against</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-gray-400">7%</div>
                        <div className="text-xs text-gray-400">Abstain</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>1,876 votes cast</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a]">
                  <Button variant="ghost" className="text-gray-400 w-full">
                    View Implementation Details
                  </Button>
                </CardFooter>
              </Card>

              {/* Passed Proposal 2 */}
              <Card className="bg-[#252530] border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-green-600 mb-2">Passed</Badge>
                      <CardTitle className="text-white">Developer Grants Program</CardTitle>
                      <CardDescription>
                        Establishment of a grants program to fund developers building on the Cheers platform
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                      <Clock className="h-3.5 w-3.5 mr-1" /> In Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-green-500">92%</div>
                        <div className="text-xs text-gray-400">In Favor</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-red-500">5%</div>
                        <div className="text-xs text-gray-400">Against</div>
                      </div>
                      <div className="bg-[#1a1a24] p-3 rounded-md text-center">
                        <div className="text-xl font-bold text-gray-400">3%</div>
                        <div className="text-xs text-gray-400">Abstain</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>2,145 votes cast</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a]">
                  <Button variant="ghost" className="text-gray-400 w-full">
                    View Implementation Progress
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">How to Participate</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join the Cheers governance process and help shape the future of browserless technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Eligibility Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Active Cheers account for at least 30 days</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Minimum participation score of 100 points</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Verified identity through Solana wallet connection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Getting Started</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Connect your Solana wallet to your Cheers account</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Join the Governance community bar for discussions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-500/20 rounded-full p-1 mr-3 mt-0.5">
                        <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                      </div>
                      <span className="text-gray-300">Review the governance documentation and guidelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-900/70 to-amber-700/70">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Join the Cheers DAO</h2>
              <p className="text-xl text-white/80 mb-8">
                Be part of the decision-making process and help shape the future of browserless technology
              </p>
              <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
                Join Governance <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
