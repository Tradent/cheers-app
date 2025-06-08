"use client"

import React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Beer, Menu, Download, LogIn, LogOut, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, wallet, disconnectWallet } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d2d3a] bg-[#0e0e13]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0e0e13]/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Beer className="h-6 w-6 text-amber-500" />
            <span className="font-bold text-xl text-white">Cheers</span>
          </Link>
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1a1a24] border-l border-[#2d2d3a] text-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/explore" onClick={() => setIsOpen(false)} className="px-2 py-1 text-lg">
                  Explore
                </Link>
                <Link href="/bars" onClick={() => setIsOpen(false)} className="px-2 py-1 text-lg">
                  Bars
                </Link>
                <Link href="/developers" onClick={() => setIsOpen(false)} className="px-2 py-1 text-lg">
                  Developers
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)} className="px-2 py-1 text-lg">
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        disconnectWallet()
                        setIsOpen(false)
                      }}
                      className="flex items-center px-2 py-1 text-lg text-red-400"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link href="/signin" onClick={() => setIsOpen(false)} className="px-2 py-1 text-lg">
                    Sign In
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu className="ml-auto">
            <NavigationMenuList className="text-white">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#252530] focus:bg-[#252530]">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a1a24] border border-[#2d2d3a]">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-amber-500 to-amber-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/browserless"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Browserless Technology</div>
                          <p className="text-sm leading-tight text-white/90">
                            Discover how our Solana-powered browserless technology works
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/tokens" title="Blockchain Browsing">
                      Navigate the web through decentralized nodes
                    </ListItem>
                    <ListItem href="/nfts" title="Web3 Integration">
                      Seamless connection with your digital assets
                    </ListItem>
                    <ListItem href="/defi" title="Privacy Focus">
                      Browse without tracking or data collection
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#252530] focus:bg-[#252530]">
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a1a24] border border-[#2d2d3a]">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/bars/popular" title="Popular Bars">
                      Join the most active community bars
                    </ListItem>
                    <ListItem href="/bars/new" title="New Bars">
                      Discover newly created community spaces
                    </ListItem>
                    <ListItem href="/bars/create" title="Create Bar">
                      Start your own community bar
                    </ListItem>
                    <ListItem href="/bars/rewards" title="Rewards">
                      View your earned rewards and promotions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#252530] focus:bg-[#252530]">
                  Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a1a24] border border-[#2d2d3a]">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/developers/api" title="API">
                      Access our comprehensive Solana API
                    </ListItem>
                    <ListItem href="/developers/sdk" title="SDK">
                      Download and integrate our developer SDK
                    </ListItem>
                    <ListItem href="/developers/tools" title="Tools">
                      Browser-based tools for Solana development
                    </ListItem>
                    <ListItem href="/developers/docs" title="Documentation">
                      Detailed guides and reference materials
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {isAuthenticated && (
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-[#252530] focus:bg-[#252530]",
                      )}
                    >
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="ml-4 flex items-center space-x-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-[#2d2d3a] text-white">
                  <User className="h-4 w-4 mr-2" />
                  {wallet.address?.substring(0, 4)}...{wallet.address?.substring(wallet.address.length - 4)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a24] border border-[#2d2d3a]">
                <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#2d2d3a]" />
                <DropdownMenuItem
                  className="text-white hover:bg-[#252530] focus:bg-[#252530] cursor-pointer"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-400 hover:bg-[#252530] focus:bg-[#252530] cursor-pointer"
                  onClick={disconnectWallet}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
              <Link href="/signin">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Link>
            </Button>
          )}

          <Button className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
            <Link href="/download">
              <Download className="mr-2 h-4 w-4" /> Download
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#252530] hover:text-white focus:bg-[#252530] focus:text-white",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-400">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
