'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="fixed z-20 top-0 left-0 right-0  " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 container flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <a
            href="https://www.linkedin.com/company/asociacion-pratodo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.amalab.es/_astro/linkedin.iKP4I5Sw.svg"
              alt="linkedin"
              className="w-8 h-8"
            />
          </a>
        {/* <HeaderNav data={data} /> */}
      </div>
    </header>
  )
}
