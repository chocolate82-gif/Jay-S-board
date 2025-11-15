'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiZap, FiMap, FiRefreshCw } from 'react-icons/fi'

const solutions = [
  {
    icon: <FiZap className="w-6 h-6" />,
    title: '상태 기반 개인화',
    description: '컨디션·취향·일정을 실시간으로 읽어 루틴 생성. 오늘의 수면, 피로도, 에너지 레벨을 반영하고, 과거 선택 패턴을 학습하여 개인화된 추천을 제공합니다.',
    color: 'text-primary-600 bg-primary-100',
  },
  {
    icon: <FiMap className="w-6 h-6" />,
    title: '자동 루트 생성',
    description: '하루 2~3개의 실행 가능한 루트 자동 생성. 지나친 추천 대신 압축된 현실적인 루트를 제공하며, 각 루트마다 추천 이유를 명확히 설명합니다.',
    color: 'text-secondary-600 bg-secondary-100',
  },
  {
    icon: <FiRefreshCw className="w-6 h-6" />,
    title: '실시간 조정',
    description: '날씨/에너지 변화에 즉시 대응. "지금 너무 피곤해" → 즉시 더 짧은 루트로 재생성, "비가 오기 시작했어" → 실내 옵션으로 자동 전환합니다.',
    color: 'text-accent-600 bg-accent-100',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Context-AI가 당신의 하루를 설계합니다
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              사용자의 상태를 읽는 최초의 Personal Travel OS
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SlideUp key={index} delay={index * 0.1} trigger="scroll">
              <Card variant="elevated" hover className="h-full">
                <div className="flex flex-col items-start">
                  <div className={`p-3 rounded-lg ${solution.color} mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
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
