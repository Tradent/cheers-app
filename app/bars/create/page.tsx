"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Beer, Upload, Info, Shield, Users, Lock, Globe, CheckCircle } from "lucide-react"

export default function CreateBarPage() {
  const [barName, setBarName] = useState("")
  const [description, setDescription] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setCurrentStep(3) // Move to success step
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Create Your Own Bar</h1>
              <p className="text-xl text-gray-400 mb-6">
                Start a community space for discussions, collaboration, and connection
              </p>
            </div>
          </div>
        </section>

        {/* Create Bar Form Section */}
        <section className="py-12 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <Card className="bg-[#252530] border-0 max-w-3xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl">Create a New Bar</CardTitle>
                    <CardDescription>Set up your community space in the Cheers ecosystem</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className={`h-2 w-2 rounded-full ${currentStep >= 1 ? "bg-amber-500" : "bg-gray-600"}`}></div>
                    <div className={`h-2 w-2 rounded-full ${currentStep >= 2 ? "bg-amber-500" : "bg-gray-600"}`}></div>
                    <div className={`h-2 w-2 rounded-full ${currentStep >= 3 ? "bg-amber-500" : "bg-gray-600"}`}></div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {currentStep === 1 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setCurrentStep(2)
                    }}
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="bar-name" className="text-white">
                          Bar Name
                        </Label>
                        <Input
                          id="bar-name"
                          placeholder="Enter a name for your bar"
                          className="bg-[#1a1a24] border-[#2d2d3a] text-white"
                          value={barName}
                          onChange={(e) => setBarName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-white">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Describe what your bar is about"
                          className="bg-[#1a1a24] border-[#2d2d3a] text-white min-h-[120px]"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-white">
                          Category
                        </Label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger className="bg-[#1a1a24] border-[#2d2d3a] text-white">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#252530] border-[#2d2d3a] text-white">
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="nfts">NFTs & Digital Art</SelectItem>
                            <SelectItem value="defi">DeFi & Finance</SelectItem>
                            <SelectItem value="gaming">Gaming & Metaverse</SelectItem>
                            <SelectItem value="education">Education & Resources</SelectItem>
                            <SelectItem value="trading">Trading & Markets</SelectItem>
                            <SelectItem value="governance">Governance & DAOs</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tags" className="text-white">
                          Tags (comma separated)
                        </Label>
                        <Input
                          id="tags"
                          placeholder="solana, community, development"
                          className="bg-[#1a1a24] border-[#2d2d3a] text-white"
                          value={tags}
                          onChange={(e) => setTags(e.target.value)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="public-bar" className="text-white">
                            Public Bar
                          </Label>
                          <p className="text-xs text-gray-400">Anyone can join without approval</p>
                        </div>
                        <Switch
                          id="public-bar"
                          checked={isPublic}
                          onCheckedChange={setIsPublic}
                          className="data-[state=checked]:bg-amber-600"
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Continue to Customization
                        </Button>
                      </div>
                    </div>
                  </form>
                )}

                {currentStep === 2 && (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-white mb-4">Bar Customization</h3>

                        <Tabs defaultValue="appearance">
                          <TabsList className="bg-[#1a1a24] border-[#2d2d3a]">
                            <TabsTrigger value="appearance">Appearance</TabsTrigger>
                            <TabsTrigger value="roles">Roles</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                          </TabsList>

                          <TabsContent value="appearance" className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <Label className="text-white">Bar Icon</Label>
                              <div className="flex items-center gap-4">
                                <div className="h-24 w-24 rounded-lg bg-[#1a1a24] border border-dashed border-[#2d2d3a] flex items-center justify-center">
                                  <Upload className="h-8 w-8 text-gray-400" />
                                </div>
                                <div className="text-sm text-gray-400">
                                  <p>Upload a square image (recommended: 256x256px)</p>
                                  <p>Max size: 5MB</p>
                                  <Button variant="outline" size="sm" className="mt-2 border-[#2d2d3a] text-white">
                                    Upload Image
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label className="text-white">Bar Banner</Label>
                              <div className="h-32 w-full rounded-lg bg-[#1a1a24] border border-dashed border-[#2d2d3a] flex items-center justify-center">
                                <div className="text-center">
                                  <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                                  <p className="text-sm text-gray-400 mt-2">
                                    Upload a banner image (recommended: 1200x300px)
                                  </p>
                                  <Button variant="outline" size="sm" className="mt-2 border-[#2d2d3a] text-white">
                                    Upload Banner
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="theme-color" className="text-white">
                                Theme Color
                              </Label>
                              <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-amber-600 cursor-pointer ring-2 ring-white"></div>
                                <div className="h-8 w-8 rounded-full bg-blue-600 cursor-pointer"></div>
                                <div className="h-8 w-8 rounded-full bg-green-600 cursor-pointer"></div>
                                <div className="h-8 w-8 rounded-full bg-purple-600 cursor-pointer"></div>
                                <div className="h-8 w-8 rounded-full bg-red-600 cursor-pointer"></div>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="roles" className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <Label className="text-white">Default Member Roles</Label>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-md">
                                  <div className="flex items-center">
                                    <Shield className="h-5 w-5 text-amber-500 mr-2" />
                                    <span className="text-white">Bartender (Admin)</span>
                                  </div>
                                  <span className="text-xs text-gray-400">You</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-[#1a1a24] rounded-md">
                                  <div className="flex items-center">
                                    <Users className="h-5 w-5 text-amber-400 mr-2" />
                                    <span className="text-white">Regular (Member)</span>
                                  </div>
                                  <span className="text-xs text-gray-400">Default</span>
                                </div>
                              </div>

                              <Button variant="outline" size="sm" className="mt-2 border-[#2d2d3a] text-white">
                                Add Custom Role
                              </Button>
                            </div>
                          </TabsContent>

                          <TabsContent value="settings" className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                  <Label className="text-white">Privacy</Label>
                                  <p className="text-xs text-gray-400">Control who can see and join your bar</p>
                                </div>
                                <div className="flex items-center">
                                  {isPublic ? (
                                    <Globe className="h-5 w-5 text-green-500 mr-1" />
                                  ) : (
                                    <Lock className="h-5 w-5 text-amber-500 mr-1" />
                                  )}
                                  <span className="text-sm text-white">{isPublic ? "Public" : "Private"}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <div className="space-y-0.5">
                                  <Label className="text-white">Member Approval</Label>
                                  <p className="text-xs text-gray-400">Require approval for new members</p>
                                </div>
                                <Switch className="data-[state=checked]:bg-amber-600" />
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <div className="space-y-0.5">
                                  <Label className="text-white">Content Moderation</Label>
                                  <p className="text-xs text-gray-400">Enable automated content filtering</p>
                                </div>
                                <Switch defaultChecked className="data-[state=checked]:bg-amber-600" />
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-[#2d2d3a] text-white"
                          onClick={() => setCurrentStep(1)}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="bg-amber-600 hover:bg-amber-700 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Creating Bar..." : "Create Bar"}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}

                {currentStep === 3 && (
                  <div className="py-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Bar Created Successfully!</h3>
                    <p className="text-gray-400 mb-6">
                      Your new bar "{barName}" has been created and is ready for members to join.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                        <Link href={`/bars/my-bar`}>Go to Your Bar</Link>
                      </Button>
                      <Button variant="outline" className="border-[#2d2d3a] text-white">
                        Invite Members
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="border-t border-[#2d2d3a] mt-6">
                <div className="w-full flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Info className="h-4 w-4 mr-1" />
                    <span>
                      Need help? Check our{" "}
                      <a href="/help" className="text-amber-500 hover:underline">
                        Bar Creation Guide
                      </a>
                    </span>
                  </div>
                  <span>Step {currentStep} of 3</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Benefits of Creating Your Own Bar</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Build and nurture your own community in the Cheers browserless ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Build Your Community</h3>
                  <p className="text-gray-400">
                    Create a dedicated space for like-minded individuals to connect and collaborate
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Full Control</h3>
                  <p className="text-gray-400">
                    Customize your bar's appearance, set rules, and manage member permissions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-400/20 flex items-center justify-center mx-auto mb-4">
                    <Beer className="h-6 w-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Earn Rewards</h3>
                  <p className="text-gray-400">
                    Bar owners receive special rewards and recognition in the Cheers ecosystem
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
