import React from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import { FiGithub, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-600 text-sm">
              Context-AI 기반 하루 루틴 자동 설계 서비스
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">링크</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  기능
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  사용 방법
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  로드맵
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">연락처</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  <FiMail />
                  <span>이메일</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="mt-2">MIT License</p>
        </div>
      </div>
    </footer>
  )
}
