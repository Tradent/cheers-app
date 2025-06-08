import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Code, Bug, Star, GitPullRequest, Users, MessageSquare, Heart } from "lucide-react"
import Link from "next/link"

export default function ContributePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contribute to Cheers</h1>
              <p className="text-xl text-gray-400 mb-8">
                Join our open-source community and help build the future of browserless technology
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Github className="mr-2 h-5 w-5" /> View on GitHub
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                  Join Discord Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Ways to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#252530] p-6 rounded-lg border border-[#2d2d3a] flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Code</h3>
                <p className="text-gray-400 mb-4">
                  Contribute to our codebase by implementing features, fixing bugs, or improving performance.
                </p>
                <Link href="https://github.com/cheers-browser/contribute" className="mt-auto">
                  <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                    Start Coding
                  </Button>
                </Link>
              </div>

              <div className="bg-[#252530] p-6 rounded-lg border border-[#2d2d3a] flex flex-col items-center text-center">
                <Bug className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Report Bugs</h3>
                <p className="text-gray-400 mb-4">
                  Help us improve by reporting bugs and issues you encounter while using Cheers.
                </p>
                <Link href="https://github.com/cheers-browser/issues" className="mt-auto">
                  <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                    Report Issue
                  </Button>
                </Link>
              </div>

              <div className="bg-[#252530] p-6 rounded-lg border border-[#2d2d3a] flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                <p className="text-gray-400 mb-4">
                  Improve our documentation by fixing errors, adding examples, or translating content.
                </p>
                <Link href="https://github.com/cheers-browser/docs" className="mt-auto">
                  <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                    Improve Docs
                  </Button>
                </Link>
              </div>

              <div className="bg-[#252530] p-6 rounded-lg border border-[#2d2d3a] flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-gray-400 mb-4">
                  Help other users, participate in discussions, and share your knowledge and experience.
                </p>
                <Link href="https://discord.gg/cheers" className="mt-auto">
                  <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                    Join Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Guide */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Contribution Guide</h2>

            <Tabs defaultValue="code" className="w-full max-w-4xl mx-auto">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="code">Code Contributions</TabsTrigger>
                <TabsTrigger value="docs">Documentation</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              <TabsContent value="code">
                <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] p-6">
                  <h3 className="text-xl font-bold text-white mb-4">How to Contribute Code</h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Fork the Repository</h4>
                        <p className="text-gray-400">
                          Start by forking the Cheers repository on GitHub to your own account.
                        </p>
                        <div className="bg-[#252530] rounded-lg p-4 mt-2">
                          <pre className="text-amber-400 overflow-x-auto text-sm">
                            <code>git clone https://github.com/your-username/cheers-browser.git</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Create a Branch</h4>
                        <p className="text-gray-400">Create a new branch for your feature or bug fix.</p>
                        <div className="bg-[#252530] rounded-lg p-4 mt-2">
                          <pre className="text-amber-400 overflow-x-auto text-sm">
                            <code>git checkout -b feature/your-feature-name</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Make Changes</h4>
                        <p className="text-gray-400">
                          Make your changes to the codebase, following our coding standards and guidelines.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Test Your Changes</h4>
                        <p className="text-gray-400">
                          Run tests to ensure your changes don't break existing functionality.
                        </p>
                        <div className="bg-[#252530] rounded-lg p-4 mt-2">
                          <pre className="text-amber-400 overflow-x-auto text-sm">
                            <code>npm run test</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                        5
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Submit a Pull Request</h4>
                        <p className="text-gray-400">
                          Push your changes to your fork and submit a pull request to the main repository.
                        </p>
                        <div className="bg-[#252530] rounded-lg p-4 mt-2">
                          <pre className="text-amber-400 overflow-x-auto text-sm">
                            <code>git push origin feature/your-feature-name</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="docs">
                <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Documentation Contributions</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Improving Documentation</h4>
                      <p className="text-gray-400 mb-4">
                        Our documentation is stored in the <code className="text-amber-400">docs/</code> directory of
                        the main repository. You can contribute by:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        <li>Fixing typos and grammatical errors</li>
                        <li>Adding missing information or clarifying existing content</li>
                        <li>Creating new tutorials or guides</li>
                        <li>Translating documentation to other languages</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Documentation Style Guide</h4>
                      <p className="text-gray-400 mb-4">
                        When contributing to documentation, please follow our style guide:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        <li>Use clear, concise language</li>
                        <li>Include code examples where appropriate</li>
                        <li>Use proper Markdown formatting</li>
                        <li>Include screenshots for UI-related documentation</li>
                      </ul>
                    </div>

                    <div className="bg-[#252530] rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">Documentation Repository</h4>
                      <p className="text-gray-400 mb-4">Our documentation is maintained in a separate repository:</p>
                      <Link
                        href="https://github.com/cheers-browser/docs"
                        className="text-amber-500 hover:text-amber-400 flex items-center"
                      >
                        <Github className="mr-2 h-5 w-5" /> github.com/cheers-browser/docs
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="community">
                <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Community Contributions</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Join Our Community</h4>
                      <p className="text-gray-400 mb-4">There are many ways to contribute to the Cheers community:</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                        <li>Answer questions on our Discord server</li>
                        <li>Share your knowledge and experience with other users</li>
                        <li>Participate in discussions and provide feedback</li>
                        <li>Help moderate community channels</li>
                        <li>Organize or participate in community events</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#252530] rounded-lg p-4">
                        <h4 className="text-lg font-medium text-white mb-2">Discord Community</h4>
                        <p className="text-gray-400 mb-4">
                          Join our Discord server to connect with other contributors and users:
                        </p>
                        <Link
                          href="https://discord.gg/cheers"
                          className="text-amber-500 hover:text-amber-400 flex items-center"
                        >
                          <MessageSquare className="mr-2 h-5 w-5" /> discord.gg/cheers
                        </Link>
                      </div>

                      <div className="bg-[#252530] rounded-lg p-4">
                        <h4 className="text-lg font-medium text-white mb-2">Community Forums</h4>
                        <p className="text-gray-400 mb-4">Participate in discussions on our community forums:</p>
                        <Link
                          href="https://community.cheers-browser.io"
                          className="text-amber-500 hover:text-amber-400 flex items-center"
                        >
                          <Users className="mr-2 h-5 w-5" /> community.cheers-browser.io
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contributors */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Contributors</h2>

            <div className="text-center mb-8">
              <p className="text-gray-400 max-w-2xl mx-auto">
                We're grateful to all the amazing people who have contributed to the Cheers project. Join our growing
                community of contributors!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-[#252530] border border-[#2d2d3a] overflow-hidden">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                      alt={`Contributor ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                +120
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Star className="mr-2 h-5 w-5" /> Star Us on GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our open-source community today and help shape the future of browserless technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
                <GitPullRequest className="mr-2 h-5 w-5" /> Submit Your First PR
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="mr-2 h-5 w-5" /> Support the Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
