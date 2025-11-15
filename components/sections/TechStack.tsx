'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { SiNextdotjs, SiSupabase, SiOpenai } from 'react-icons/si'

const technologies = [
  {
    name: 'Next.js',
    description: '프론트엔드 프레임워크',
    detail: 'App Router 기반의 현대적인 React 프레임워크. 서버 사이드 렌더링 및 최적화된 성능으로 빠른 페이지 로딩과 부드러운 사용자 경험을 제공합니다.',
    icon: <SiNextdotjs className="w-12 h-12" />,
    color: 'text-gray-900',
    bgColor: 'bg-gray-100',
  },
  {
    name: 'Supabase',
    description: '백엔드 및 인증',
    detail: '실시간 데이터베이스와 인증 시스템. 사용자 프로필 및 루트 데이터 저장을 위한 안전하고 확장 가능한 백엔드 인프라를 제공합니다.',
    icon: <SiSupabase className="w-12 h-12" />,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'OpenAI',
    description: 'AI 루트 생성',
    detail: 'GPT 기반 컨텍스트 이해 및 루트 생성. 사용자 상태와 취향을 종합 분석하여 개인화된 루트를 생성하고, Explainable AI로 추천 이유를 설명합니다.',
    icon: <SiOpenai className="w-12 h-12" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최신 기술 스택으로 구축된 안정적이고 확장 가능한 플랫폼
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <SlideUp key={index} delay={index * 0.1} trigger="scroll">
              <Card variant="elevated" hover className="h-full text-center">
                <div className="flex flex-col items-center">
                  <div className={`p-4 rounded-xl ${tech.bgColor} mb-6`}>
                    <div className={tech.color}>
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {tech.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.detail}
                  </p>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
