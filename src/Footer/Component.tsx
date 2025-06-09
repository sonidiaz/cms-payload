import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { GrLinkedin } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { AiFillFacebook } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io5'

export async function Footer({ locale }: { locale: any }) {
  const footerData: Footer = await getCachedGlobal('footer', 1, locale)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-border text-black bg-white">
      <div className="container w-full py-8 gap-18 flex flex-col md:flex-row justify-between">
        {/* <Link className="flex items-center" href="/">
          <Logo LogoTheme={'dark'} />
        </Link> */}
        <div className="py-8 container flex justify-center">
          {/* <nav className="flex gap-2 items-center">
            <a href="https://www.instagram.com/prato_do/" target="_blank" rel="noopener noreferrer">
              <GrInstagram color="black" className="w-7 h-7" />
            </a>
            <a
              href="https://www.facebook.com/pratodoinnova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook color="black" className="w-7 h-7" />
            </a>
            <a
              href="https://www.youtube.com/@pratodo7673"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube color="black" className="w-7 h-7" />
            </a>
          </nav> */}
          {/* <HeaderNav data={data} /> */}
        </div>
        {/* <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:w-[calc(100%/2)] mt-7 md:mt-0">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div> */}
      </div>
    </footer>
  )
}
