"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProtectedRoute from "@/components/protected-route"
import { useAuth } from "@/contexts/auth-context"
import {
  Search,
  Download,
  RefreshCw,
  Settings,
  Beer,
  Star,
  Filter,
  Plus,
  CheckCircle,
  XCircle,
  ChevronRight,
  BarChart3,
  Users,
  Zap,
  ExternalLink,
  type ArrowUpRight,
  Wallet,
} from "lucide-react"

// Sample data for installed taps
const installedTaps = [
  {
    id: 1,
    name: "Solana Wallet",
    description: "Official Solana wallet integration for Cheers",
    category: "Finance",
    users: 125000,
    version: "1.2.0",
    lastUpdated: "2 days ago",
    icon: "/tap-icons/solana-wallet.png",
    enabled: true,
  },
  {
    id: 2,
    name: "NFT Gallery",
    description: "View and manage your NFT collection",
    category: "NFTs",
    users: 98000,
    version: "0.9.5",
    lastUpdated: "1 week ago",
    icon: "/tap-icons/nft-gallery.png",
    enabled: true,
  },
  {
    id: 3,
    name: "DeFi Dashboard",
    description: "Track your DeFi investments and yields",
    category: "Finance",
    users: 85000,
    version: "1.1.2",
    lastUpdated: "3 days ago",
    icon: "/tap-icons/defi-dashboard.png",
    enabled: false,
  },
  {
    id: 4,
    name: "Social Feed",
    description: "Connect with other Cheers users",
    category: "Social",
    users: 72000,
    version: "2.0.1",
    lastUpdated: "5 days ago",
    icon: "/tap-icons/social-feed.png",
    enabled: true,
  },
]

// Sample data for suggested taps
const suggestedTaps = [
  {
    id: 5,
    name: "Token Swap",
    description: "Easily swap tokens with best rates",
    category: "Finance",
    users: 145000,
    rating: 4.8,
    icon: "/tap-icons/token-swap.png",
  },
  {
    id: 6,
    name: "Governance Voting",
    description: "Participate in DAO governance",
    category: "Governance",
    users: 68000,
    rating: 4.6,
    icon: "/tap-icons/governance.png",
  },
  {
    id: 7,
    name: "Market Analytics",
    description: "Real-time market data and analysis",
    category: "Finance",
    users: 112000,
    rating: 4.7,
    icon: "/tap-icons/market-analytics.png",
  },
  {
    id: 8,
    name: "Developer Tools",
    description: "Essential tools for Solana developers",
    category: "Development",
    users: 42000,
    rating: 4.9,
    icon: "/tap-icons/developer-tools.png",
  },
]

// Sample data for all available taps (for search)
const allTaps = [
  ...installedTaps,
  ...suggestedTaps,
  {
    id: 9,
    name: "News Aggregator",
    description: "Latest crypto and blockchain news",
    category: "News",
    users: 89000,
    rating: 4.5,
    icon: "/tap-icons/news.png",
  },
  {
    id: 10,
    name: "Portfolio Tracker",
    description: "Track your crypto portfolio performance",
    category: "Finance",
    users: 132000,
    rating: 4.7,
    icon: "/tap-icons/portfolio.png",
  },
  {
    id: 11,
    name: "Security Scanner",
    description: "Scan transactions and contracts for security issues",
    category: "Security",
    users: 76000,
    rating: 4.8,
    icon: "/tap-icons/security.png",
  },
  {
    id: 12,
    name: "Staking Manager",
    description: "Manage your staking positions",
    category: "Finance",
    users: 95000,
    rating: 4.6,
    icon: "/tap-icons/staking.png",
  },
]

// Categories for filtering
const categories = ["All", "Finance", "NFTs", "Social", "Governance", "Development", "News", "Security"]

export default function Dashboard() {
  const { wallet } = useAuth()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [enabledTaps, setEnabledTaps] = useState(
    installedTaps.reduce(
      (acc, tap) => {
        acc[tap.id] = tap.enabled
        return acc
      },
      {} as Record<number, boolean>,
    ),
  )

  // Download status - in a real app, this would come from your backend
  const downloadStatus = {
    downloaded: true,
    version: "1.2.0",
    lastUpdated: "April 10, 2023",
    platform: "Windows 11",
    installDate: "March 15, 2023",
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1500)
  }

  const handleToggleTap = (id: number) => {
    setEnabledTaps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Filter taps based on search query and category
  const filteredTaps = allTaps.filter((tap) => {
    const matchesSearch =
      tap.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tap.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tap.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col bg-[#0e0e13]">
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Cheers Dashboard</h1>
                <p className="text-gray-400">Manage your Cheers browser and taps</p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                {/* Add wallet info */}
                <div className="mr-4 bg-[#1a1a24] border border-[#2d2d3a] rounded-md px-3 py-1 flex items-center">
                  <Wallet className="h-4 w-4 text-amber-500 mr-2" />
                  <span className="text-sm text-white truncate max-w-[120px] md:max-w-[200px]">
                    {wallet.address?.substring(0, 6)}...{wallet.address?.substring(wallet.address.length - 4)}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="border-[#2d2d3a] text-white"
                >
                  {isRefreshing ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Refreshing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </>
                  )}
                </Button>
                <Button variant="outline" size="icon" className="border-[#2d2d3a] text-white">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Download Status Card */}
            <Card className="mb-6 bg-[#1a1a24] border-[#2d2d3a]">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Cheers Browser Status</CardTitle>
                  <CardDescription className="text-gray-400">Your browser installation details</CardDescription>
                </div>
                {downloadStatus.downloaded ? (
                  <Badge className="bg-green-600 hover:bg-green-700">Installed</Badge>
                ) : (
                  <Badge className="bg-amber-600 hover:bg-amber-700">Not Installed</Badge>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Version</span>
                    <span className="text-lg font-medium text-white">{downloadStatus.version}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Last Updated</span>
                    <span className="text-lg font-medium text-white">{downloadStatus.lastUpdated}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Platform</span>
                    <span className="text-lg font-medium text-white">{downloadStatus.platform}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Install Date</span>
                    <span className="text-lg font-medium text-white">{downloadStatus.installDate}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-[#2d2d3a] flex justify-between">
                <div className="flex items-center text-gray-400">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Your browser is up to date</span>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Download className="mr-2 h-4 w-4" /> Check for Updates
                </Button>
              </CardFooter>
            </Card>

            <Tabs defaultValue="installed" className="space-y-6">
              <TabsList className="bg-[#1a1a24] border-[#2d2d3a]">
                <TabsTrigger value="installed">Installed Taps</TabsTrigger>
                <TabsTrigger value="suggested">Suggested Taps</TabsTrigger>
                <TabsTrigger value="browse">Browse Taps</TabsTrigger>
                <TabsTrigger value="stats">Tap Stats</TabsTrigger>
              </TabsList>
              <TabsContent value="installed">
                <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Your Installed Taps</CardTitle>
                      <CardDescription className="text-gray-400">
                        Manage the taps you've added to Cheers
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          type="search"
                          placeholder="Search installed taps..."
                          className="pl-8 w-full md:w-[200px] bg-[#252530] border-[#2d2d3a] text-white"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {installedTaps
                        .filter(
                          (tap) =>
                            tap.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tap.description.toLowerCase().includes(searchQuery.toLowerCase()),
                        )
                        .map((tap) => (
                          <div
                            key={tap.id}
                            className="flex items-center justify-between p-4 rounded-lg bg-[#252530] border border-[#2d2d3a]"
                          >
                            <div className="flex items-center">
                              <div className="h-12 w-12 rounded-lg bg-[#1a1a24] flex items-center justify-center mr-4">
                                {tap.icon ? (
                                  <img
                                    src={tap.icon || "/placeholder.svg"}
                                    alt={tap.name}
                                    className="h-8 w-8"
                                    onError={(e) => {
                                      e.currentTarget.src = "/digital-finger-tap.png"
                                    }}
                                  />
                                ) : (
                                  <Beer className="h-8 w-8 text-amber-500" />
                                )}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium text-white">{tap.name}</h3>
                                <p className="text-sm text-gray-400">{tap.description}</p>
                                <div className="flex items-center mt-1">
                                  <Badge variant="outline" className="text-xs mr-2 border-[#2d2d3a] text-gray-400">
                                    {tap.category}
                                  </Badge>
                                  <span className="text-xs text-gray-400">v{tap.version}</span>
                                  <span className="text-xs text-gray-400 mx-2">•</span>
                                  <span className="text-xs text-gray-400">Updated {tap.lastUpdated}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                <Switch
                                  checked={enabledTaps[tap.id]}
                                  onCheckedChange={() => handleToggleTap(tap.id)}
                                  className="data-[state=checked]:bg-amber-600"
                                />
                                <span className="ml-2 text-sm text-gray-400">
                                  {enabledTaps[tap.id] ? "Enabled" : "Disabled"}
                                </span>
                              </div>
                              <Button variant="ghost" size="icon" className="text-gray-400">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                    {installedTaps.filter(
                      (tap) =>
                        tap.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        tap.description.toLowerCase().includes(searchQuery.toLowerCase()),
                    ).length === 0 && (
                      <div className="text-center py-8">
                        <XCircle className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                        <h3 className="text-lg font-medium text-white">No matching taps found</h3>
                        <p className="text-gray-400">Try a different search term</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-[#2d2d3a] flex justify-between">
                    <div className="text-sm text-gray-400">
                      {installedTaps.length} taps installed • {Object.values(enabledTaps).filter(Boolean).length}{" "}
                      enabled
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Plus className="mr-2 h-4 w-4" /> Add New Tap
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="suggested">
                <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                  <CardHeader>
                    <CardTitle className="text-white">Suggested Taps for You</CardTitle>
                    <CardDescription className="text-gray-400">
                      Recommended taps based on your usage and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {suggestedTaps.map((tap) => (
                        <div
                          key={tap.id}
                          className="flex items-start p-4 rounded-lg bg-[#252530] border border-[#2d2d3a]"
                        >
                          <div className="h-12 w-12 rounded-lg bg-[#1a1a24] flex items-center justify-center mr-4 flex-shrink-0">
                            {tap.icon ? (
                              <img
                                src={tap.icon || "/placeholder.svg"}
                                alt={tap.name}
                                className="h-8 w-8"
                                onError={(e) => {
                                  e.currentTarget.src = "/digital-finger-tap.png"
                                }}
                              />
                            ) : (
                              <Beer className="h-8 w-8 text-amber-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-medium text-white">{tap.name}</h3>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-amber-500 mr-1" />
                                <span className="text-sm text-white">{tap.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">{tap.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs border-[#2d2d3a] text-gray-400">
                                {tap.category}
                              </Badge>
                              <div className="flex items-center text-xs text-gray-400">
                                <Users className="h-3 w-3 mr-1" />
                                {tap.users.toLocaleString()} users
                              </div>
                            </div>
                            <Button className="w-full mt-3 bg-amber-600 hover:bg-amber-700 text-white">
                              <Plus className="mr-2 h-4 w-4" /> Add Tap
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-[#2d2d3a] flex justify-center">
                    <Button variant="outline" className="border-[#2d2d3a] text-white">
                      View More Suggestions <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="browse">
                <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Browse All Taps</CardTitle>
                      <CardDescription className="text-gray-400">
                        Discover and install taps from the Cheers community
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          type="search"
                          placeholder="Search taps..."
                          className="pl-8 w-full md:w-[200px] bg-[#252530] border-[#2d2d3a] text-white"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="icon" className="border-[#2d2d3a] text-white">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={
                            selectedCategory === category
                              ? "bg-amber-600 hover:bg-amber-700 cursor-pointer"
                              : "border-[#2d2d3a] text-gray-400 hover:border-amber-600 hover:text-amber-500 cursor-pointer"
                          }
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {filteredTaps.map((tap) => (
                        <div key={tap.id} className="flex flex-col p-4 rounded-lg bg-[#252530] border border-[#2d2d3a]">
                          <div className="flex items-center mb-3">
                            <div className="h-10 w-10 rounded-lg bg-[#1a1a24] flex items-center justify-center mr-3">
                              {tap.icon ? (
                                <img
                                  src={tap.icon || "/placeholder.svg"}
                                  alt={tap.name}
                                  className="h-6 w-6"
                                  onError={(e) => {
                                    e.currentTarget.src = "/digital-finger-tap.png"
                                  }}
                                />
                              ) : (
                                <Beer className="h-6 w-6 text-amber-500" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-md font-medium text-white">{tap.name}</h3>
                              <Badge variant="outline" className="text-xs border-[#2d2d3a] text-gray-400">
                                {tap.category}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 mb-3 flex-1">{tap.description}</p>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center text-xs text-gray-400">
                              <Users className="h-3 w-3 mr-1" />
                              {(tap as any).users?.toLocaleString() || "N/A"} users
                            </div>
                            {(tap as any).rating && (
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-amber-500 mr-1" />
                                <span className="text-sm text-white">{(tap as any).rating}</span>
                              </div>
                            )}
                          </div>
                          <Button
                            className={
                              installedTaps.some((t) => t.id === tap.id)
                                ? "bg-[#2d2d3a] hover:bg-[#3d3d4a] text-white"
                                : "bg-amber-600 hover:bg-amber-700 text-white"
                            }
                          >
                            {installedTaps.some((t) => t.id === tap.id) ? (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" /> Installed
                              </>
                            ) : (
                              <>
                                <Plus className="mr-2 h-4 w-4" /> Add Tap
                              </>
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>

                    {filteredTaps.length === 0 && (
                      <div className="text-center py-8">
                        <XCircle className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                        <h3 className="text-lg font-medium text-white">No matching taps found</h3>
                        <p className="text-gray-400">Try a different search term or category</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-[#2d2d3a] flex justify-between">
                    <div className="text-sm text-gray-400">
                      Showing {filteredTaps.length} of {allTaps.length} taps
                    </div>
                    <Button variant="outline" className="border-[#2d2d3a] text-white">
                      Submit a Tap <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="stats">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-white">Active Taps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Beer className="h-8 w-8 text-amber-500 mr-3" />
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {Object.values(enabledTaps).filter(Boolean).length}
                          </div>
                          <p className="text-xs text-gray-400">of {installedTaps.length} installed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-white">Most Used Tap</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-lg bg-[#252530] flex items-center justify-center mr-3">
                          <img
                            src="/tap-icons/solana-wallet.png"
                            alt="Solana Wallet"
                            className="h-6 w-6"
                            onError={(e) => {
                              e.currentTarget.src = "/digital-finger-tap.png"
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">Solana Wallet</div>
                          <p className="text-xs text-gray-400">Used 28 times this week</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-white">Tap Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Zap className="h-8 w-8 text-amber-500 mr-3" />
                        <div>
                          <div className="text-2xl font-bold text-white">2</div>
                          <p className="text-xs text-gray-400">updates available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                    <CardHeader>
                      <CardTitle className="text-white">Tap Usage</CardTitle>
                      <CardDescription className="text-gray-400">Your most active taps this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {installedTaps
                          .filter((tap) => enabledTaps[tap.id])
                          .map((tap, index) => (
                            <div key={tap.id} className="flex items-center">
                              <div className="h-8 w-8 rounded-lg bg-[#252530] flex items-center justify-center mr-3">
                                {tap.icon ? (
                                  <img
                                    src={tap.icon || "/placeholder.svg"}
                                    alt={tap.name}
                                    className="h-5 w-5"
                                    onError={(e) => {
                                      e.currentTarget.src = "/digital-finger-tap.png"
                                    }}
                                  />
                                ) : (
                                  <Beer className="h-5 w-5 text-amber-500" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium text-white">{tap.name}</span>
                                  <span className="text-xs text-gray-400">{28 - index * 5} uses</span>
                                </div>
                                <div className="w-full bg-[#252530] h-2 rounded-full mt-1">
                                  <div
                                    className="bg-amber-600 h-2 rounded-full"
                                    style={{ width: `${100 - index * 20}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1a1a24] border-[#2d2d3a]">
                    <CardHeader>
                      <CardTitle className="text-white">Tap Categories</CardTitle>
                      <CardDescription className="text-gray-400">Distribution by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {["Finance", "NFTs", "Social", "Development"].map((category, index) => {
                          const count = installedTaps.filter((tap) => tap.category === category).length
                          const percentage = (count / installedTaps.length) * 100

                          return (
                            <div key={category} className="flex items-center">
                              <div className="h-8 w-8 rounded-lg bg-[#252530] flex items-center justify-center mr-3">
                                {category === "Finance" && <BarChart3 className="h-5 w-5 text-amber-500" />}
                                {category === "NFTs" && <Image className="h-5 w-5 text-amber-500" />}
                                {category === "Social" && <Users className="h-5 w-5 text-amber-500" />}
                                {category === "Development" && <Code className="h-5 w-5 text-amber-500" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium text-white">{category}</span>
                                  <span className="text-xs text-gray-400">
                                    {count} taps ({percentage.toFixed(0)}%)
                                  </span>
                                </div>
                                <div className="w-full bg-[#252530] h-2 rounded-full mt-1">
                                  <div
                                    className="bg-amber-600 h-2 rounded-full"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6 bg-[#1a1a24] border-[#2d2d3a]">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Recent Activity</CardTitle>
                      <CardDescription className="text-gray-400">Your recent tap interactions</CardDescription>
                    </div>
                    <Button variant="outline" className="border-[#2d2d3a] text-white">
                      View All <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          tap: "Solana Wallet",
                          action: "Sent 2.5 SOL",
                          time: "2 hours ago",
                          icon: "/tap-icons/solana-wallet.png",
                        },
                        {
                          tap: "NFT Gallery",
                          action: "Viewed collection",
                          time: "Yesterday",
                          icon: "/tap-icons/nft-gallery.png",
                        },
                        {
                          tap: "Social Feed",
                          action: "Posted update",
                          time: "2 days ago",
                          icon: "/tap-icons/social-feed.png",
                        },
                        {
                          tap: "Token Swap",
                          action: "Installed tap",
                          time: "3 days ago",
                          icon: "/tap-icons/token-swap.png",
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center p-3 rounded-lg bg-[#252530]">
                          <div className="h-10 w-10 rounded-lg bg-[#1a1a24] flex items-center justify-center mr-3">
                            <img
                              src={activity.icon || "/placeholder.svg"}
                              alt={activity.tap}
                              className="h-6 w-6"
                              onError={(e) => {
                                e.currentTarget.src = "/digital-finger-tap.png"
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-white">{activity.tap}</span>
                              <span className="text-xs text-gray-400">{activity.time}</span>
                            </div>
                            <span className="text-sm text-gray-400">{activity.action}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}

function Image(props: React.ComponentProps<typeof ArrowUpRight>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}

function Code(props: React.ComponentProps<typeof ArrowUpRight>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
