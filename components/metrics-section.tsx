"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data - in a real app, this would come from your Solana API
const dailyData = [
  { date: "Apr 01", transactions: 2400, volume: 1.2, users: 400 },
  { date: "Apr 02", transactions: 1398, volume: 0.9, users: 380 },
  { date: "Apr 03", transactions: 9800, volume: 2.8, users: 520 },
  { date: "Apr 04", transactions: 3908, volume: 1.8, users: 460 },
  { date: "Apr 05", transactions: 4800, volume: 2.2, users: 480 },
  { date: "Apr 06", transactions: 3800, volume: 1.9, users: 470 },
  { date: "Apr 07", transactions: 4300, volume: 2.1, users: 490 },
]

const weeklyData = [
  { date: "Week 1", transactions: 12000, volume: 8.2, users: 2400 },
  { date: "Week 2", transactions: 19000, volume: 9.8, users: 2800 },
  { date: "Week 3", transactions: 22000, volume: 12.1, users: 3100 },
  { date: "Week 4", transactions: 25000, volume: 14.5, users: 3400 },
]

const monthlyData = [
  { date: "Jan", transactions: 65000, volume: 32.5, users: 8500 },
  { date: "Feb", transactions: 58000, volume: 29.0, users: 8200 },
  { date: "Mar", transactions: 90000, volume: 45.0, users: 9800 },
  { date: "Apr", transactions: 81000, volume: 40.5, users: 9500 },
]

const topTokens = [
  { name: "SOL", volume: 120.5, change: 5.2 },
  { name: "BONK", volume: 45.8, change: 12.7 },
  { name: "JTO", volume: 32.1, change: -2.3 },
  { name: "PYTH", volume: 28.6, change: 8.1 },
  { name: "ORCA", volume: 22.4, change: 1.5 },
]

export function MetricsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Solana Blockchain Metrics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track key metrics and trends on the Solana blockchain to make informed decisions
          </p>
        </div>

        <Tabs defaultValue="transactions" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="volume">Trading Volume</TabsTrigger>
              <TabsTrigger value="users">Active Users</TabsTrigger>
              <TabsTrigger value="tokens">Top Tokens</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Transaction Activity</CardTitle>
                <CardDescription>Number of transactions processed on Solana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ChartContainer
                    config={{
                      transactions: {
                        label: "Transactions",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dailyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="transactions"
                          stroke="var(--color-transactions)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Daily</div>
                      <div className="text-2xl font-bold">4,300</div>
                      <div className="text-xs text-green-500">+12% from yesterday</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Weekly</div>
                      <div className="text-2xl font-bold">25,000</div>
                      <div className="text-xs text-green-500">+8% from last week</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Monthly</div>
                      <div className="text-2xl font-bold">81,000</div>
                      <div className="text-xs text-red-500">-10% from last month</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="volume">
            <Card>
              <CardHeader>
                <CardTitle>Trading Volume</CardTitle>
                <CardDescription>Total value traded on Solana (in billions USD)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ChartContainer
                    config={{
                      volume: {
                        label: "Volume (B)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dailyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="volume" fill="var(--color-volume)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Daily</div>
                      <div className="text-2xl font-bold">$2.1B</div>
                      <div className="text-xs text-green-500">+5% from yesterday</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Weekly</div>
                      <div className="text-2xl font-bold">$14.5B</div>
                      <div className="text-xs text-green-500">+20% from last week</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Monthly</div>
                      <div className="text-2xl font-bold">$40.5B</div>
                      <div className="text-xs text-red-500">-10% from last month</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
                <CardDescription>Unique active wallets on Solana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ChartContainer
                    config={{
                      users: {
                        label: "Active Users",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dailyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line
                          type="monotone"
                          dataKey="users"
                          stroke="var(--color-users)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Daily</div>
                      <div className="text-2xl font-bold">490</div>
                      <div className="text-xs text-green-500">+4% from yesterday</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Weekly</div>
                      <div className="text-2xl font-bold">3,400</div>
                      <div className="text-xs text-green-500">+10% from last week</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium text-muted-foreground">Monthly</div>
                      <div className="text-2xl font-bold">9,500</div>
                      <div className="text-xs text-red-500">-3% from last month</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens">
            <Card>
              <CardHeader>
                <CardTitle>Top Tokens by Volume</CardTitle>
                <CardDescription>Most traded tokens on Solana in the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Token</th>
                        <th className="text-right py-3 px-4">Volume (24h)</th>
                        <th className="text-right py-3 px-4">Change (24h)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topTokens.map((token, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 font-medium">{token.name}</td>
                          <td className="text-right py-3 px-4">${token.volume}M</td>
                          <td
                            className={`text-right py-3 px-4 ${token.change >= 0 ? "text-green-500" : "text-red-500"}`}
                          >
                            {token.change >= 0 ? "+" : ""}
                            {token.change}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Tokens
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
