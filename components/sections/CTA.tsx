'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiArrowRight, FiGithub, FiStar } from 'react-icons/fi'

export default function CTA() {
  return (
    <section id="early-access" className="py-20 md:py-32 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              지금 시작하세요
            </h2>
          </FadeIn>
          
          <SlideUp delay={0.2}>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              DayFlow AI와 함께 더 스마트한 여행을 경험해보세요
            </p>
          </SlideUp>
          
          <SlideUp delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#early-access"
                variant="primary"
                size="lg"
                icon={<FiArrowRight />}
                className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Early Access 신청하기
              </Button>
              <Button
                href="https://github.com/chocolate82-gif/Jay-S-board"
                variant="secondary"
                size="lg"
                icon={<FiGithub />}
                className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 w-full sm:w-auto"
              >
                GitHub에서 보기
              </Button>
              <Button
                href="https://github.com/chocolate82-gif/Jay-S-board"
                variant="tertiary"
                size="lg"
                icon={<FiStar />}
                className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Star ⭐
              </Button>
            </div>
          </SlideUp>
        </div>
      </Container>
    </section>
  )
}
