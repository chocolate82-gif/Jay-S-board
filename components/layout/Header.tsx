'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import { FiGithub } from 'react-icons/fi'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              href={SITE_CONFIG.github}
              variant="secondary"
              size="sm"
              icon={<FiGithub />}
            >
              GitHub
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={SITE_CONFIG.github}
              variant="secondary"
              size="sm"
              icon={<FiGithub />}
              className="w-full"
            >
              GitHub
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
