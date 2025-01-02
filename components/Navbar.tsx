"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X, ChevronRight } from 'lucide-react'

const navItems = [
  { name: "HOME", href: "/" },
  { name: "PRICING", href: "#pricing" },
  { name: "FEATURES", href: "#features" },
  { name: "DOCS", href: "#docs" },
  { name: "BLOG", href: "#blog" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0118]/95 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Logo - Only visible on mobile */}
          <div className="flex items-center md:hidden">
            <Link href="/" className="flex-shrink-0">
              <svg
                className="h-8 w-auto text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/90 hover:text-white px-3 py-2 font-medium tracking-wide transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/90">
                  <span className="sr-only">Open menu</span>
                  {isOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-[400px] bg-[#0a0118] border-[#1a1127] text-white"
              >
                <nav className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center text-lg font-medium text-white/90 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <ChevronRight className="ml-2 h-4 w-4 opacity-50" />
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Build Products CTA */}
        <div className="flex justify-center pb-6">
          <Link 
            href="/sign-in" 
            className="text-sm text-white/80 hover:text-white flex items-center space-x-2 transition-colors"
          >
            <span>Build products for everyone</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

