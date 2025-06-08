import { Navbar } from "@/components/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function ToolsLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="relative bg-[#0e0e13] py-20">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-12 w-3/4 max-w-lg mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </section>

        {/* Tools Categories Skeleton */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                    <Skeleton className="h-10 w-10 mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Featured Tool Skeleton */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  <div className="space-y-3 mb-6">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="flex items-start">
                          <Skeleton className="h-4 w-4 mr-3 mt-0.5" />
                          <Skeleton className="h-4 w-5/6" />
                        </div>
                      ))}
                  </div>
                  <Skeleton className="h-10 w-40" />
                </div>
                <div className="bg-[#252530] flex items-center justify-center p-8">
                  <Skeleton className="w-full h-64" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
