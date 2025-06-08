import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SignInLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-muted/30 p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
