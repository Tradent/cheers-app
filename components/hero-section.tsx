import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0e0e13] py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-[#252530] px-3 py-1 text-sm text-gray-300">
              <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
              <span className="ml-2">Introducing Browserless Technology</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
              The Future of <span className="text-amber-500">Web3</span> Browsing is Here
            </h1>
            <p className="text-xl text-gray-400">
              Experience the web without a browser. Cheers is the first browserless browser powered by Solana blockchain
              technology, offering unparalleled speed, security, and decentralization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                <Link href="/download">
                  <Download className="mr-2 h-5 w-5" /> Download Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]" asChild>
                <Link href="/learn">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-400" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                <span>Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-white text-xs">
                  S
                </span>
                <span>Solana-powered</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 opacity-75 blur"></div>
            <div className="relative rounded-2xl bg-[#1a1a24] p-2">
              <img
                src="/browserless-interface.png"
                alt="Cheers Browserless Interface"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
