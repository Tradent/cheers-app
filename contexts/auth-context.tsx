"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export type WalletType = "phantom" | "solflare" | "metamask" | null

export interface AuthContextType {
  isAuthenticated: boolean
  wallet: {
    type: WalletType
    address: string | null
  }
  isLoading: boolean
  connectWallet: (walletType: WalletType) => Promise<boolean>
  disconnectWallet: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [wallet, setWallet] = useState<{ type: WalletType; address: string | null }>({
    type: null,
    address: null,
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = () => {
      const savedWallet = localStorage.getItem("cheers_wallet")
      const savedAddress = localStorage.getItem("cheers_address")
      const savedType = localStorage.getItem("cheers_wallet_type") as WalletType

      if (savedWallet && savedAddress && savedType) {
        setWallet({
          type: savedType,
          address: savedAddress,
        })
        setIsAuthenticated(true)
      }

      setIsLoading(false)
    }

    checkSession()
  }, [])

  // Connect wallet function
  const connectWallet = async (walletType: WalletType): Promise<boolean> => {
    setIsLoading(true)

    try {
      // In a real implementation, we would:
      // 1. Check if the wallet extension is installed
      // 2. Request connection to the wallet
      // 3. Request a signature to verify ownership
      // 4. Verify the signature on the backend

      // For this demo, we'll simulate a successful connection
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate a mock address based on wallet type
      let mockAddress = ""

      switch (walletType) {
        case "phantom":
          mockAddress = "PhAn7omWa11etAddre55111111111111111111111"
          break
        case "solflare":
          mockAddress = "So1F1areWa11etAddre5522222222222222222222"
          break
        case "metamask":
          mockAddress = "0xMetaMa5kWa11etAddre5533333333333333333"
          break
        default:
          throw new Error("Unknown wallet type")
      }

      // Save to state and localStorage
      setWallet({
        type: walletType,
        address: mockAddress,
      })

      localStorage.setItem("cheers_wallet", "connected")
      localStorage.setItem("cheers_address", mockAddress)
      localStorage.setItem("cheers_wallet_type", walletType)

      setIsAuthenticated(true)
      setIsLoading(false)
      return true
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      setIsLoading(false)
      return false
    }
  }

  // Disconnect wallet function
  const disconnectWallet = () => {
    setWallet({
      type: null,
      address: null,
    })
    setIsAuthenticated(false)

    // Clear localStorage
    localStorage.removeItem("cheers_wallet")
    localStorage.removeItem("cheers_address")
    localStorage.removeItem("cheers_wallet_type")

    // Redirect to home
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        wallet,
        isLoading,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
