import { Navbar } from "@/components/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function ContributeLoading() {
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

        {/* Ways to Contribute Skeleton */}
        <section className="py-16 bg-[#14141b]">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="bg-[#1a1a24] p-6 rounded-lg border border-[#2d2d3a]">
                    <Skeleton className="h-12 w-12 mx-auto mb-4" />
                    <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                    <Skeleton className="h-4 w-full mb-1 mx-auto" />
                    <Skeleton className="h-4 w-5/6 mb-4 mx-auto" />
                    <Skeleton className="h-10 w-32 mx-auto" />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Contribution Guide Skeleton */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-10 w-full mb-8" />
              <div className="bg-[#1a1a24] rounded-lg border border-[#2d2d3a] p-6">
                <Skeleton className="h-8 w-64 mb-6" />
                <div className="space-y-6">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex">
                        <Skeleton className="h-8 w-8 rounded-full mr-4" />
                        <div className="flex-1">
                          <Skeleton className="h-6 w-48 mb-2" />
                          <Skeleton className="h-4 w-full mb-1" />
                          <Skeleton className="h-4 w-5/6 mb-2" />
                          <Skeleton className="h-16 w-full" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
