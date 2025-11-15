'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiUser, FiMap, FiTarget, FiRefreshCw, FiNavigation } from 'react-icons/fi'

const features = [
  {
    icon: <FiUser className="w-6 h-6" />,
    title: '사용자 상태 입력/학습',
    description: '여행 날짜, 체류 지역, 오늘의 컨디션(수면, 피로도, 기분, 에너지) 입력. 취향 태그 선택 및 이동 성향 설정. AI가 사용자의 패턴을 학습하여 개인화 모델 구축.',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    icon: <FiMap className="w-6 h-6" />,
    title: '하루 루트 자동 생성',
    description: '상태, 날씨, 위치 기반으로 3개의 서로 다른 루트 생성. 각 루트: 3~5개 장소 + 이동시간 + 추천 이유. Explainable AI로 "왜 이 루트를 추천했는지" 명확히 설명.',
    color: 'text-purple-600 bg-purple-100',
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: '장소 추천',
    description: '카테고리별 장소 후보군 자동 생성. 분위기/혼잡도/평균 체류시간 필터링. 과거 패턴 기반 자동 스코어링으로 사용자 취향에 맞는 맞춤 추천.',
    color: 'text-green-600 bg-green-100',
  },
  {
    icon: <FiRefreshCw className="w-6 h-6" />,
    title: '실시간 조정',
    description: '"지금 너무 피곤해" 버튼 → 즉시 더 짧은 루트로 재생성. "비가 오기 시작했어" → 실내 옵션으로 자동 전환. "너무 붐벼" → 대체 장소 추천.',
    color: 'text-orange-600 bg-orange-100',
  },
  {
    icon: <FiNavigation className="w-6 h-6" />,
    title: '동선 최적화',
    description: '시간, 거리, 에너지 레벨을 제약 조건으로 최적화. 걷기/택시 기준 이동 시간 자동 계산. AI + 지도 데이터 기반 경로 최적화로 에너지 효율적인 루트 제안.',
    color: 'text-red-600 bg-red-100',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Context-AI 기반의 강력한 기능들
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SlideUp key={index} delay={index * 0.1} trigger="scroll">
              <Card variant="elevated" hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`p-3 rounded-lg ${feature.color} mb-4 w-fit`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
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
