import { Navbar } from "@/components/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-9" />
            </div>
          </div>

          {/* Download Status Card Skeleton */}
          <div className="mb-6 bg-[#1a1a24] border border-[#2d2d3a] rounded-lg">
            <div className="p-6 flex justify-between">
              <div>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex flex-col">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-32" />
                    </div>
                  ))}
              </div>
            </div>
            <div className="p-6 border-t border-[#2d2d3a] flex justify-between">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-9 w-36" />
            </div>
          </div>

          <div className="space-y-4">
            <Skeleton className="h-10 w-full max-w-md" />

            {/* Tab Content Skeleton */}
            <div className="bg-[#1a1a24] border border-[#2d2d3a] rounded-lg">
              <div className="p-6 flex justify-between">
                <div>
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-64" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-9 w-48" />
                  <Skeleton className="h-9 w-9" />
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="p-4 rounded-lg bg-[#252530] border border-[#2d2d3a]">
                        <div className="flex items-center">
                          <Skeleton className="h-12 w-12 rounded-lg mr-4" />
                          <div className="flex-1">
                            <Skeleton className="h-5 w-48 mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <div className="flex items-center">
                              <Skeleton className="h-4 w-16 mr-2" />
                              <Skeleton className="h-4 w-24" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <Skeleton className="h-6 w-24" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="p-6 border-t border-[#2d2d3a] flex justify-between">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-9 w-36" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
