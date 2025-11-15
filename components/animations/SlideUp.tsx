'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
  trigger?: 'mount' | 'scroll'
  className?: string
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 20,
  trigger = 'mount',
  className,
}: SlideUpProps) {
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
      
      const element = document.getElementById(`slide-up-${delay}`)
      if (element) {
        observer.observe(element)
      }
      
      return () => observer.disconnect()
    }
  }, [trigger, delay])
  
  return (
    <motion.div
      id={trigger === 'scroll' ? `slide-up-${delay}` : undefined}
      initial={{ opacity: 0, y: distance }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
