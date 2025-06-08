import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  ComputerIcon as Windows,
  Apple,
  LaptopIcon as Linux,
  Shield,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Download Cheers Browser</h1>
              <p className="text-xl text-gray-400 mb-8">
                Experience the future of Web3 browsing with our Solana-powered browserless technology
              </p>
              <div className="inline-flex items-center rounded-full bg-[#252530] px-3 py-1 text-sm text-gray-300 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                <span>Latest Version: 1.2.0 (Released April 10, 2023)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-12 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="desktop" className="w-full max-w-4xl mx-auto">
              <TabsList className="w-full grid grid-cols-2 mb-8">
                <TabsTrigger value="desktop">Desktop</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
              </TabsList>

              <TabsContent value="desktop">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <Windows className="h-16 w-16 text-amber-500 mb-4" />
                        <h3 className="text-xl font-medium text-white mb-2">Windows</h3>
                        <p className="text-gray-400 mb-6">Windows 10/11 (64-bit)</p>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          <Download className="mr-2 h-4 w-4" /> Download for Windows
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">120 MB</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <Apple className="h-16 w-16 text-amber-500 mb-4" />
                        <h3 className="text-xl font-medium text-white mb-2">macOS</h3>
                        <p className="text-gray-400 mb-6">macOS 11+ (Intel & Apple Silicon)</p>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          <Download className="mr-2 h-4 w-4" /> Download for macOS
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">135 MB</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <Linux className="h-16 w-16 text-amber-500 mb-4" />
                        <h3 className="text-xl font-medium text-white mb-2">Linux</h3>
                        <p className="text-gray-400 mb-6">Ubuntu, Debian, Fedora & more</p>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          <Download className="mr-2 h-4 w-4" /> Download for Linux
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">110 MB</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-[#252530] rounded-lg p-6">
                  <h3 className="text-xl font-medium text-white mb-4">System Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-amber-500 mb-2">Windows</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>Windows 10 or 11 (64-bit)</li>
                        <li>4GB RAM minimum</li>
                        <li>500MB free disk space</li>
                        <li>Intel Core i3 or equivalent</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-500 mb-2">macOS</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>macOS 11 Big Sur or newer</li>
                        <li>4GB RAM minimum</li>
                        <li>500MB free disk space</li>
                        <li>Intel or Apple Silicon</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-500 mb-2">Linux</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>Ubuntu 20.04+, Debian 10+</li>
                        <li>4GB RAM minimum</li>
                        <li>500MB free disk space</li>
                        <li>Intel Core i3 or equivalent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mobile">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="rounded-full bg-[#1a1a24] p-4 mb-4">
                          <img src="/stylized-app-store.png" alt="App Store" className="h-16 w-16" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">iOS</h3>
                        <p className="text-gray-400 mb-6">iPhone and iPad (iOS 14+)</p>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          <Download className="mr-2 h-4 w-4" /> Download on App Store
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="rounded-full bg-[#1a1a24] p-4 mb-4">
                          <img src="/google-play-store-icon.png" alt="Play Store" className="h-16 w-16" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Android</h3>
                        <p className="text-gray-400 mb-6">Android 8.0+ devices</p>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          <Download className="mr-2 h-4 w-4" /> Download on Play Store
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-[#252530] rounded-lg p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Mobile Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-amber-500 mb-2">iOS</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>iOS 14.0 or newer</li>
                        <li>iPhone 8 or newer</li>
                        <li>iPad 6th generation or newer</li>
                        <li>200MB free storage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-500 mb-2">Android</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>Android 8.0 (Oreo) or newer</li>
                        <li>2GB RAM minimum</li>
                        <li>200MB free storage</li>
                        <li>ARM64 processor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Cheers Browser?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the benefits of our Solana-powered browserless technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Enhanced Privacy</h3>
                <p className="text-gray-400">
                  No tracking, no cookies, no surveillance. Your browsing data stays with you, secured by blockchain
                  technology.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">
                  Experience browsing speeds up to 10x faster than traditional browsers thanks to Solana's
                  high-performance blockchain.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Web3 Native</h3>
                <p className="text-gray-400">
                  Seamlessly interact with dApps, NFTs, and tokens without additional extensions or wallets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Installation Guide</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Follow these simple steps to get started with Cheers Browser
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Download the installer</h3>
                    <p className="text-gray-400">
                      Choose the appropriate version for your operating system and download the installer package.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Run the installer</h3>
                    <p className="text-gray-400">
                      Open the downloaded file and follow the on-screen instructions to install Cheers Browser on your
                      device.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Connect your wallet</h3>
                    <p className="text-gray-400">
                      Launch Cheers Browser and connect your Solana wallet to start exploring the decentralized web.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Start browsing</h3>
                    <p className="text-gray-400">
                      Enjoy a faster, more secure, and truly decentralized browsing experience powered by Solana.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#252530] rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Need Help?</h3>
                    <p className="text-gray-400 mb-4">
                      If you encounter any issues during installation or have questions about Cheers Browser, our
                      support team is here to help.
                    </p>
                    <Button variant="outline" className="border-amber-600 text-amber-500 hover:bg-amber-900/20">
                      Visit Support Center
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
