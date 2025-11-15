'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  trigger?: 'mount' | 'scroll'
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  trigger = 'mount',
  className,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'mount')
  
  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 }
      )
      
      const element = document.getElementById(`fade-in-${delay}`)
      if (element) {
        observer.observe(element)
      }
      
      return () => observer.disconnect()
    }
  }, [trigger, delay])
  
  return (
    <motion.div
      id={trigger === 'scroll' ? `fade-in-${delay}` : undefined}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
