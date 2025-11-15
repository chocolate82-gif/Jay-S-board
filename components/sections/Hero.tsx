'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiArrowRight, FiGithub, FiStar } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>
      
      <Container className="relative z-10 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              오늘의 나에게 맞는
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                하루 루틴을 자동 설계
              </span>
            </h1>
          </FadeIn>
          
          <SlideUp delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Context-AI가 당신의 컨디션·취향·일정을 실시간으로 읽어
              <br className="hidden md:block" />
              <span className="font-semibold text-gray-800">'오늘 가능한 단 하나의 최적 루틴'</span>을 자동 설계합니다.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#early-access"
                variant="primary"
                size="lg"
                icon={<FiArrowRight />}
                className="w-full sm:w-auto"
              >
                Early Access 신청하기
              </Button>
              <Button
                href="https://github.com/chocolate82-gif/Jay-S-board"
                variant="secondary"
                size="lg"
                icon={<FiGithub />}
                className="w-full sm:w-auto"
              >
                GitHub에서 보기
              </Button>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.8}>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FiStar className="text-yellow-500" />
                <span>GitHub Star</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="hidden md:block">MIT License</div>
            </div>
          </SlideUp>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
