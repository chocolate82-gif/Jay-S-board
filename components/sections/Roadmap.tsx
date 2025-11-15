'use client'

import React from 'react'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import { FiCheckCircle, FiClock, FiCalendar } from 'react-icons/fi'

const milestones = [
  {
    phase: 'MVP',
    status: 'in-progress',
    duration: '6주',
    items: [
      '사용자 상태 입력/학습',
      '하루 루트 자동 생성',
      '장소 추천',
      '실시간 조정',
      '동선 최적화',
      'Supabase 저장/로그인',
    ],
    icon: <FiClock className="w-6 h-6" />,
  },
  {
    phase: 'P1',
    status: 'planned',
    duration: '향후',
    items: [
      '취향 학습 모델 강화',
      '상태 기반 모드 자동 감지',
      '멀티 유저 기능 (패밀리/커플)',
    ],
    icon: <FiCalendar className="w-6 h-6" />,
  },
  {
    phase: 'P2',
    status: 'planned',
    duration: '향후',
    items: [
      '예약 연동 (레스토랑, 요가, 스파)',
      '오프라인 모드',
      '호텔 B2B 버전',
    ],
    icon: <FiCalendar className="w-6 h-6" />,
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <FadeIn trigger="scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              로드맵
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              지속적인 개선과 확장을 위한 계획
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <SlideUp key={index} delay={index * 0.1} trigger="scroll">
              <Card 
                variant={milestone.status === 'in-progress' ? 'elevated' : 'outlined'} 
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        milestone.status === 'in-progress' 
                          ? 'bg-primary-100 text-primary-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {milestone.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {milestone.phase}
                      </h3>
                    </div>
                    <Badge 
                      variant={
                        milestone.status === 'in-progress' 
                          ? 'info' 
                          : milestone.status === 'completed'
                          ? 'success'
                          : 'default'
                      }
                      size="sm"
                    >
                      {milestone.status === 'in-progress' ? '진행 중' : milestone.status === 'completed' ? '완료' : '예정'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    기간: {milestone.duration}
                  </p>
                  
                  <ul className="space-y-2 flex-grow">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        {milestone.status === 'completed' ? (
                          <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        ) : (
                          <span className="text-primary-600 mr-2 mt-0.5">•</span>
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
