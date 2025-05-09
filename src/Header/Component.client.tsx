'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { GrLinkedin, GrInstagram } from 'react-icons/gr'
import { IoLogoYoutube } from "react-icons/io"
import { AiFillFacebook } from "react-icons/ai"

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
    <header className="relative z-20 top-0 left-0 right-0  " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 container flex justify-between">
        <Link href="/">
          <Logo LogoTheme={'white'} loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <nav className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/company/asociacion-pratodo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin color="white" className="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/prato_do/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram color="white" className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com/pratodoinnova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook color="white" className="w-7 h-7" />
          </a>
          <a
            href="https://www.youtube.com/@pratodo7673"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube color="white" className="w-7 h-7" />
          </a>
        </nav>
        {/* <HeaderNav data={data} /> */}
      </div>
    </header>
  )
}
