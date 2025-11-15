'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiEdit, FiZap, FiCheckCircle, FiPlay, FiTrendingUp } from 'react-icons/fi'

const steps = [
  {
    number: 1,
    icon: <FiEdit className="w-6 h-6" />,
    title: 'Onboarding',
    description: '위치/일정/취향 입력. 여행 날짜와 체류 지역 선택, 취향 태그 선택, 오늘의 컨디션 입력, 필수 일정 입력.',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    number: 2,
    icon: <FiZap className="w-6 h-6" />,
    title: 'Start My Day',
    description: 'AI가 3개 루트 생성. OpenAI 프롬프트로 컨텍스트 압축, 날씨·위치·에너지 레벨을 종합 분석하여 3개의 서로 다른 루트 자동 생성.',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    number: 3,
    icon: <FiCheckCircle className="w-6 h-6" />,
    title: '루트 선택',
    description: '추천 이유 확인 후 선택. 각 루트의 상세 정보 확인, "왜 이 루트를 추천했는지" AI 설명 읽기, 장소별 예상 체류 시간과 이동 시간 확인.',
    color: 'text-green-600 bg-green-100',
  },
  {
    number: 4,
    icon: <FiPlay className="w-6 h-6" />,
    title: '실행 중',
    description: '실시간 조정 가능. 선택한 루트를 따라 이동, "지금 너무 피곤해" → 즉시 루트 재설계, "대기 시간이 길어" → 대체 옵션 제안.',
    color: 'text-orange-600 bg-orange-100',
  },
  {
    number: 5,
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: '하루 종료',
    description: '자동 학습 및 다음날 제안. 실행한 루트와 피드백 자동 저장, 좋아요/건너뛰기/실행 여부로 모델 업데이트, 다음날 시작 시 "어제 패턴을 기반으로 조정했어요" 제안.',
    color: 'text-red-600 bg-red-100',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              사용 방법
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5단계로 간단하게 시작하세요
            </p>
          </div>
        </FadeIn>
        
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 via-secondary-200 to-accent-200 top-0"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <SlideUp key={index} delay={index * 0.1} trigger="scroll">
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Step content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:order-3'}`}>
                    <Card variant="elevated" hover className="h-full">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${step.color} flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                            <Badge variant="info" size="sm">Step {step.number}</Badge>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Timeline dot for desktop */}
                  <div className="hidden lg:flex w-2/12 justify-center order-2">
                    <div className={`w-12 h-12 rounded-full ${step.color} border-4 border-white shadow-lg flex items-center justify-center font-bold text-white`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Mobile timeline dot */}
                  <div className="lg:hidden flex justify-center my-4">
                    <div className={`w-8 h-8 rounded-full ${step.color} border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-sm`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className={`hidden lg:block w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}></div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
