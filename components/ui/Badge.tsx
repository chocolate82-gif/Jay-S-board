import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export default function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full font-medium'
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  }
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}
