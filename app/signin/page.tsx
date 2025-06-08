"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink, Shield, AlertCircle } from "lucide-react"
import { useAuth, type WalletType } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignIn() {
  const { connectWallet, isAuthenticated, isLoading } = useAuth()
  const [connecting, setConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push("/dashboard")
    }
  }, [isAuthenticated, isLoading, router])

  const handleConnect = async (walletType: WalletType) => {
    setConnecting(true)
    setError(null)

    try {
      const success = await connectWallet(walletType)

      if (success) {
        router.push("/dashboard")
      } else {
        setError("Failed to connect wallet. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setConnecting(false)
    }
  }

  if (isLoading) {
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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In to Cheers</CardTitle>
            <CardDescription>Connect your wallet to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Tabs defaultValue="popular" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="all">All Wallets</TabsTrigger>
              </TabsList>
              <TabsContent value="popular" className="mt-4 space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-between h-14"
                  onClick={() => handleConnect("phantom")}
                  disabled={connecting}
                >
                  <div className="flex items-center">
                    <img src="/phantom-wallet-logo.png" alt="Phantom" className="h-8 w-8 mr-2" />
                    Phantom
                  </div>
                  {connecting ? (
                    <span className="text-xs text-muted-foreground">Connecting...</span>
                  ) : (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between h-14"
                  onClick={() => handleConnect("solflare")}
                  disabled={connecting}
                >
                  <div className="flex items-center">
                    <img src="/solflare-wallet-logo-inspired-design.png" alt="Solflare" className="h-8 w-8 mr-2" />
                    Solflare
                  </div>
                  {connecting ? (
                    <span className="text-xs text-muted-foreground">Connecting...</span>
                  ) : (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-between h-14"
                  onClick={() => handleConnect("metamask")}
                  disabled={connecting}
                >
                  <div className="flex items-center">
                    <img src="/stylized-fox-head.png" alt="Metamask" className="h-8 w-8 mr-2" />
                    Metamask
                  </div>
                  {connecting ? (
                    <span className="text-xs text-muted-foreground">Connecting...</span>
                  ) : (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </TabsContent>
              <TabsContent value="all" className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="flex-col h-24 space-y-2"
                    onClick={() => handleConnect("phantom")}
                    disabled={connecting}
                  >
                    <img src="/phantom-wallet-logo.png" alt="Phantom" className="h-8 w-8" />
                    <span>Phantom</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-col h-24 space-y-2"
                    onClick={() => handleConnect("solflare")}
                    disabled={connecting}
                  >
                    <img src="/solflare-wallet-logo-inspired-design.png" alt="Solflare" className="h-8 w-8" />
                    <span>Solflare</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-col h-24 space-y-2"
                    onClick={() => handleConnect("metamask")}
                    disabled={connecting}
                  >
                    <img src="/stylized-fox-head.png" alt="Metamask" className="h-8 w-8" />
                    <span>Metamask</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-col h-24 space-y-2"
                    onClick={() => handleConnect("phantom")}
                    disabled={connecting}
                  >
                    <img src="/glowing-wallet-abstract.png" alt="Glow" className="h-8 w-8" />
                    <span>Glow</span>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex items-center justify-center w-full text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-2" />
              <span>Your private keys never leave your device</span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>Don't have a wallet?</p>
              <Button variant="link" className="p-0 h-auto">
                Learn how to create one
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
