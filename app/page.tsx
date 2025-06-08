import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Sparkles, Shield } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { BrowserlessSection } from "@/components/browserless-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrowserlessSection />
        <FeatureSection />
        <TestimonialSection />

        <section className="container mx-auto py-16 px-4 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Browserless Browsing?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of users already exploring the metaverse without the limitations of traditional browsers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
              <CardContent className="p-6">
                <div className="rounded-full bg-amber-600 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Download App</h3>
                <p className="text-gray-400 mb-4">
                  Get the Cheers desktop application for the best browserless experience.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Download Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
              <CardContent className="p-6">
                <div className="rounded-full bg-amber-500 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Web Extension</h3>
                <p className="text-gray-400 mb-4">
                  Add Cheers to your existing browser to start transitioning to browserless.
                </p>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Get Extension</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
              <CardContent className="p-6">
                <div className="rounded-full bg-amber-400 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Mobile App</h3>
                <p className="text-gray-400 mb-4">
                  Take the browserless experience with you on iOS and Android devices.
                </p>
                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-white">Get Mobile App</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Powered by Solana Blockchain</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <img src="/solana-logo.png" alt="Solana" className="h-12" />
              <img src="/phantom-wallet-logo.png" alt="Phantom" className="h-10" />
              <img src="/solflare-wallet-logo-inspired-design.png" alt="Solflare" className="h-10" />
              <img src="/everyday-carry-essentials.png" alt="Backpack" className="h-10" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
