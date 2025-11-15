'use client'

import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiBriefcase, FiHeart, FiSun } from 'react-icons/fi'

const personas = [
  {
    name: 'Daniel Kim',
    role: '글로벌 비즈니스 트래블러',
    age: 37,
    icon: <FiBriefcase className="w-6 h-6" />,
    painPoints: ['피로 누적과 일정 부담', '동선 정리 스트레스', '아침 루틴 설계의 번거로움'],
    solution: '수면·컨디션 기반 자동 루트, 미팅 일정을 고려한 동선 최적화',
    color: 'text-blue-600 bg-blue-100',
  },
  {
    name: '지현',
    role: '시티 브레이크 커플',
    age: 34,
    icon: <FiHeart className="w-6 h-6" />,
    painPoints: ['과도한 정보로 인한 선택 피로', '동선 설계에 시간이 많이 소모', '실시간 상황 반영의 어려움'],
    solution: '하루 2~3개 압축 코스 자동 생성, 실시간 대기시간/날씨 기반 조정',
    color: 'text-pink-600 bg-pink-100',
  },
  {
    name: '지은',
    role: '웰니스 솔로 여행자',
    age: 39,
    icon: <FiSun className="w-6 h-6" />,
    painPoints: ['스파/요가 예약·조정의 번거로움', '에너지 레벨에 맞는 루틴 설계의 어려움', '회복 중심의 일정 관리'],
    solution: '에너지 레벨 기반 "회복 모드" 자동 설계, 웰니스 시설 예약 링크 제공',
    color: 'text-green-600 bg-green-100',
  },
]

export default function Users() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  return (
    <section id="users" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              누구를 위한 서비스인가요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 여행 시나리오에 맞춘 개인화된 솔루션
            </p>
          </div>
        </FadeIn>
        
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <SlideUp key={index} delay={index * 0.1} trigger="scroll">
              <Card variant="elevated" hover className="h-full">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${persona.color}`}>
                      {persona.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {persona.name}
                      </h3>
                      <p className="text-sm text-gray-600">{persona.role} · {persona.age}세</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Pain Points:</h4>
                    <ul className="space-y-1">
                      {persona.painPoints.map((point, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <Badge variant="info" size="sm" className="mb-2">Solution</Badge>
                    <p className="text-sm text-gray-700">{persona.solution}</p>
                  </div>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
        
        {/* Mobile: Tab Layout */}
        <div className="md:hidden">
          <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
            {personas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedIndex === index
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {persona.role}
              </button>
            ))}
          </div>
          
          <Card variant="elevated">
            <div className="flex flex-col">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${personas[selectedIndex].color}`}>
                  {personas[selectedIndex].icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {personas[selectedIndex].name}
                  </h3>
                  <p className="text-sm text-gray-600">{personas[selectedIndex].role} · {personas[selectedIndex].age}세</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Pain Points:</h4>
                <ul className="space-y-1">
                  {personas[selectedIndex].painPoints.map((point, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                <Badge variant="info" size="sm" className="mb-2">Solution</Badge>
                <p className="text-sm text-gray-700">{personas[selectedIndex].solution}</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
