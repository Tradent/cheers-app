"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Search, Filter, ArrowUp, ArrowDown, TrendingUp, Star } from "lucide-react"

// Sample data - in a real app, this would come from your Solana API
const trendingTokens = [
  { name: "Solana", symbol: "SOL", price: 80.12, change: 5.2, volume: 1.2, marketCap: 32.5 },
  { name: "Bonk", symbol: "BONK", price: 0.00000142, change: 12.7, volume: 0.8, marketCap: 0.9 },
  { name: "Jito", symbol: "JTO", price: 2.34, change: -2.3, volume: 0.5, marketCap: 0.4 },
  { name: "Pyth Network", symbol: "PYTH", price: 0.42, change: 8.1, volume: 0.3, marketCap: 0.2 },
  { name: "Orca", symbol: "ORCA", price: 1.15, change: 1.5, volume: 0.2, marketCap: 0.15 },
  { name: "Raydium", symbol: "RAY", price: 0.78, change: 3.2, volume: 0.18, marketCap: 0.12 },
  { name: "Marinade", symbol: "MNDE", price: 0.12, change: -1.8, volume: 0.15, marketCap: 0.1 },
  { name: "Helium", symbol: "HNT", price: 3.45, change: 2.1, volume: 0.14, marketCap: 0.09 },
  { name: "Render", symbol: "RNDR", price: 5.67, change: 4.3, volume: 0.13, marketCap: 0.08 },
  { name: "Drift Protocol", symbol: "DRIFT", price: 0.34, change: 7.8, volume: 0.12, marketCap: 0.07 },
]

const trendingNFTs = [
  { name: "DeGods", floor: 320.5, volume: 1250, change: 5.2 },
  { name: "Okay Bears", floor: 180.2, volume: 980, change: 3.7 },
  { name: "Solana Monkey Business", floor: 210.8, volume: 850, change: -2.3 },
  { name: "Clay Nation", floor: 95.3, volume: 720, change: 1.8 },
  { name: "Mad Lads", floor: 150.6, volume: 680, change: 8.5 },
  { name: "Famous Fox Federation", floor: 85.2, volume: 520, change: -1.2 },
  { name: "Solana Turtles", floor: 45.8, volume: 480, change: 2.4 },
  { name: "Catalina Whale Mixer", floor: 75.4, volume: 420, change: 3.9 },
  { name: "Shadowy Super Coder", floor: 60.1, volume: 380, change: 5.7 },
  { name: "Solana Monkey Academy", floor: 110.3, volume: 350, change: -0.8 },
]

const trendingDapps = [
  { name: "Jupiter", category: "DEX", users: 125000, volume: 8.5 },
  { name: "Orca", category: "DEX", users: 98000, volume: 6.2 },
  { name: "Marinade", category: "Staking", users: 85000, volume: 5.8 },
  { name: "Drift Protocol", category: "Derivatives", users: 72000, volume: 4.9 },
  { name: "Tensor", category: "NFT Marketplace", users: 68000, volume: 4.5 },
  { name: "Raydium", category: "DEX", users: 65000, volume: 4.2 },
  { name: "Kamino Finance", category: "Lending", users: 58000, volume: 3.8 },
  { name: "Jito", category: "Staking", users: 52000, volume: 3.5 },
  { name: "Mango Markets", category: "DEX", users: 48000, volume: 3.2 },
  { name: "Zeta Markets", category: "Options", users: 42000, volume: 2.8 },
]

export default function TrendingPage() {
  const [sortColumn, setSortColumn] = useState("volume")
  const [sortDirection, setSortDirection] = useState("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Trending Now</h1>
              <p className="text-muted-foreground">Discover what's hot on Solana right now</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="pl-8 w-full md:w-[200px] lg:w-[300px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="tokens" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="nfts">NFTs</TabsTrigger>
              <TabsTrigger value="dapps">dApps</TabsTrigger>
            </TabsList>

            <TabsContent value="tokens" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Trending Tokens
                  </CardTitle>
                  <CardDescription>The hottest tokens on Solana by volume and price action</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">#</th>
                          <th className="text-left py-3 px-4">Name</th>
                          <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("price")}>
                            <div className="flex items-center justify-end">
                              Price
                              {sortColumn === "price" &&
                                (sortDirection === "asc" ? (
                                  <ArrowUp className="ml-1 h-4 w-4" />
                                ) : (
                                  <ArrowDown className="ml-1 h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("change")}>
                            <div className="flex items-center justify-end">
                              24h %
                              {sortColumn === "change" &&
                                (sortDirection === "asc" ? (
                                  <ArrowUp className="ml-1 h-4 w-4" />
                                ) : (
                                  <ArrowDown className="ml-1 h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("volume")}>
                            <div className="flex items-center justify-end">
                              Volume (B)
                              {sortColumn === "volume" &&
                                (sortDirection === "asc" ? (
                                  <ArrowUp className="ml-1 h-4 w-4" />
                                ) : (
                                  <ArrowDown className="ml-1 h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th className="text-right py-3 px-4 cursor-pointer" onClick={() => handleSort("marketCap")}>
                            <div className="flex items-center justify-end">
                              Market Cap (B)
                              {sortColumn === "marketCap" &&
                                (sortDirection === "asc" ? (
                                  <ArrowUp className="ml-1 h-4 w-4" />
                                ) : (
                                  <ArrowDown className="ml-1 h-4 w-4" />
                                ))}
                            </div>
                          </th>
                          <th className="text-right py-3 px-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trendingTokens.map((token, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <img
                                  src={`/placeholder.svg?height=24&width=24&query=${token.symbol} logo`}
                                  alt={token.symbol}
                                  className="h-6 w-6 mr-2 rounded-full"
                                />
                                <div>
                                  <div className="font-medium">{token.name}</div>
                                  <div className="text-xs text-muted-foreground">{token.symbol}</div>
                                </div>
                              </div>
                            </td>
                            <td className="text-right py-3 px-4">
                              ${token.price < 0.01 ? token.price.toFixed(8) : token.price.toFixed(2)}
                            </td>
                            <td
                              className={`text-right py-3 px-4 ${token.change >= 0 ? "text-green-500" : "text-red-500"}`}
                            >
                              {token.change >= 0 ? "+" : ""}
                              {token.change}%
                            </td>
                            <td className="text-right py-3 px-4">${token.volume}B</td>
                            <td className="text-right py-3 px-4">${token.marketCap}B</td>
                            <td className="text-right py-3 px-4">
                              <Button variant="ghost" size="sm">
                                <Star className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nfts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Trending NFT Collections
                  </CardTitle>
                  <CardDescription>The hottest NFT collections on Solana by volume and floor price</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">#</th>
                          <th className="text-left py-3 px-4">Collection</th>
                          <th className="text-right py-3 px-4">Floor (SOL)</th>
                          <th className="text-right py-3 px-4">Volume (SOL)</th>
                          <th className="text-right py-3 px-4">24h %</th>
                          <th className="text-right py-3 px-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trendingNFTs.map((nft, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <img
                                  src={`/placeholder.svg?height=48&width=48&query=${nft.name} NFT`}
                                  alt={nft.name}
                                  className="h-12 w-12 mr-2 rounded-md"
                                />
                                <div className="font-medium">{nft.name}</div>
                              </div>
                            </td>
                            <td className="text-right py-3 px-4">{nft.floor.toFixed(2)}</td>
                            <td className="text-right py-3 px-4">{nft.volume.toLocaleString()}</td>
                            <td
                              className={`text-right py-3 px-4 ${nft.change >= 0 ? "text-green-500" : "text-red-500"}`}
                            >
                              {nft.change >= 0 ? "+" : ""}
                              {nft.change}%
                            </td>
                            <td className="text-right py-3 px-4">
                              <Button variant="ghost" size="sm">
                                <Star className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dapps" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Trending dApps
                  </CardTitle>
                  <CardDescription>The most popular decentralized applications on Solana</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">#</th>
                          <th className="text-left py-3 px-4">dApp</th>
                          <th className="text-left py-3 px-4">Category</th>
                          <th className="text-right py-3 px-4">Users (24h)</th>
                          <th className="text-right py-3 px-4">Volume (B)</th>
                          <th className="text-right py-3 px-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trendingDapps.map((dapp, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <img
                                  src={`/placeholder.svg?height=32&width=32&query=${dapp.name} dApp logo`}
                                  alt={dapp.name}
                                  className="h-8 w-8 mr-2 rounded-md"
                                />
                                <div className="font-medium">{dapp.name}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                {dapp.category}
                              </span>
                            </td>
                            <td className="text-right py-3 px-4">{dapp.users.toLocaleString()}</td>
                            <td className="text-right py-3 px-4">${dapp.volume}B</td>
                            <td className="text-right py-3 px-4">
                              <Button variant="ghost" size="sm">
                                <Star className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
