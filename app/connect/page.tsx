"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export default function ConnectWallet() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    // Redirect to signin page
    router.push("/signin")
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      <p className="mt-4 text-white">Redirecting to sign in...</p>
    </div>
  )
}
