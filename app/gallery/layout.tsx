"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the global navbar while on /gallery
    const navbar = document.querySelector("nav") as HTMLElement | null
    if (navbar) navbar.style.display = "none"
    return () => {
      if (navbar) navbar.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Simple top bar with only Back link */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#E8DCC8]/80 border-b border-[#C3A161]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1A1A1A] font-[family-name:var(--font-crimson)] font-semibold px-4 py-2 rounded-full border border-[#C3A161]/50 hover:bg-[#C3A161]/20 hover:border-[#C3A161] transition-all duration-200"
          >
            ← Back to main page
          </Link>
          <div className="text-xs text-[#1A1A1A]/60 font-[family-name:var(--font-crimson)]">Gallery</div>
        </div>
      </div>
      {children}
    </div>
  )
}






