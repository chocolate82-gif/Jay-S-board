import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  className?: string
}

export default function Container({
  children,
  maxWidth = 'xl',
  padding = 'md',
  className,
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }
  
  const paddings = {
    none: '',
    sm: 'px-4',
    md: 'px-4 md:px-6 lg:px-8',
    lg: 'px-6 md:px-8 lg:px-12',
  }
  
  return (
    <div className={cn('mx-auto w-full', maxWidths[maxWidth], paddings[padding], className)}>
      {children}
    </div>
  )
}
