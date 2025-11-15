import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined'
  hover?: boolean
  onClick?: () => void
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export default function Card({
  variant = 'default',
  hover = false,
  onClick,
  padding = 'md',
  className,
  children,
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-200'
  
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-gray-300',
  }
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''
  
  const classes = cn(
    baseStyles,
    variants[variant],
    paddings[padding],
    hoverStyles,
    className
  )
  
  if (onClick) {
    return (
      <div className={classes} onClick={onClick} role="button" tabIndex={0}>
        {children}
      </div>
    )
  }
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
