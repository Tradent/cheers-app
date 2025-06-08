import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Roadmap</h1>
              <p className="text-xl text-gray-400 mb-8">
                Our vision and development plan for the future of browserless technology
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Q2 2023 - Completed */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Q2 2023 - Foundation <span className="text-green-500 text-sm ml-2">Completed</span>
                  </h2>
                </div>
                <div className="ml-12 border-l-2 border-[#2d2d3a] pl-8">
                  <Card className="bg-[#252530] border-0 mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Core Technology Development</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Initial browserless engine prototype</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Solana blockchain integration</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Basic wallet functionality</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Community Building</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Website launch</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Discord community creation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Initial whitepaper release</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Q4 2023 - Completed */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Q4 2023 - Alpha Release <span className="text-green-500 text-sm ml-2">Completed</span>
                  </h2>
                </div>
                <div className="ml-12 border-l-2 border-[#2d2d3a] pl-8">
                  <Card className="bg-[#252530] border-0 mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Product Development</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Alpha version release for Windows and macOS</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Basic community bars functionality</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Initial developer API</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Ecosystem Growth</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">First partnerships with Solana projects</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Early adopter program launch</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Community feedback integration</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Q2 2024 - Current */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-600 rounded-full p-2 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Q2 2024 - Beta Release <span className="text-amber-500 text-sm ml-2">In Progress</span>
                  </h2>
                </div>
                <div className="ml-12 border-l-2 border-[#2d2d3a] pl-8">
                  <Card className="bg-[#252530] border-0 mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Product Enhancement</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Beta release for all major platforms</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Enhanced UI/UX based on user feedback</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Mobile app development (iOS and Android)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Developer Ecosystem</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Comprehensive developer documentation</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">SDK release for third-party developers</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <span className="text-gray-300">Developer grants program</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Q4 2024 - Upcoming */}
              <div className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-600 rounded-full p-2 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Q4 2024 - Public Launch <span className="text-gray-400 text-sm ml-2">Upcoming</span>
                  </h2>
                </div>
                <div className="ml-12 border-l-2 border-[#2d2d3a] pl-8">
                  <Card className="bg-[#252530] border-0 mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Full Release</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Official 1.0 release across all platforms</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Mobile app launch</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Full Web3 integration suite</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Ecosystem Expansion</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Major partnership announcements</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Community governance launch</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Global marketing campaign</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2025 - Future */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gray-600 rounded-full p-2 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    2025 and Beyond <span className="text-gray-400 text-sm ml-2">Future</span>
                  </h2>
                </div>
                <div className="ml-12 border-l-2 border-[#2d2d3a] pl-8">
                  <Card className="bg-[#252530] border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium text-white mb-3">Future Vision</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Advanced AI integration</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Expanded blockchain support beyond Solana</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Enterprise solutions</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Metaverse integration</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Be Part of Our Journey</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join our community and help shape the future of browserless technology
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/download">Try Cheers Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                  <Link href="https://discord.gg/cheers">Join Our Discord</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
