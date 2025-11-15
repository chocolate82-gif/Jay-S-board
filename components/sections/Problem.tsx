'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiX, FiAlertCircle, FiRefreshCw } from 'react-icons/fi'

const problems = [
  {
    icon: <FiRefreshCw className="w-6 h-6" />,
    title: '직접 동선을 재정리하는 번거로움',
    description: '기존 여행 앱은 장소 정보만 제공할 뿐, 사용자가 직접 동선을 설계해야 합니다. 시간과 노력이 많이 소모됩니다.',
  },
  {
    icon: <FiAlertCircle className="w-6 h-6" />,
    title: '실시간 상황에 따라 스스로 조정해야 함',
    description: '날씨가 변하면 계획을 다시 세워야 하고, 에너지 레벨이 낮아지면 일정을 수동으로 조정해야 합니다.',
  },
  {
    icon: <FiX className="w-6 h-6" />,
    title: '반복 입력의 피로',
    description: '매번 같은 취향과 선호도를 입력하고, 컨디션과 일정을 계속 업데이트해야 합니다. 개인화된 추천이 부족합니다.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-gray-50">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              여행 계획, 이제까지 이렇게 하셨나요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              기존 여행 앱의 한계를 경험해보셨나요?
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <SlideUp key={index} delay={index * 0.1} trigger="scroll">
              <Card variant="elevated" hover className="h-full">
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-red-100 rounded-lg text-red-600 mb-4">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
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
