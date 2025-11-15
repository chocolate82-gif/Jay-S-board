import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DayFlow AI - 오늘의 나에게 맞는 하루 루틴을 자동 설계',
  description: 'Context-AI가 당신의 컨디션·취향·일정을 실시간으로 읽어 오늘 가능한 최적 루틴을 자동 설계합니다.',
  keywords: ['여행 계획', 'AI 여행', '루틴 설계', '개인화 여행', 'Context-AI'],
  authors: [{ name: 'DayFlow AI Team' }],
  openGraph: {
    title: 'DayFlow AI',
    description: 'Context-AI 기반 하루 루틴 자동 설계 서비스',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
