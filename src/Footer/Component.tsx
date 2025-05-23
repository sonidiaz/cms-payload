import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'


export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1, null)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-border text-black bg-white">
      <div className="container py-8 gap-18 flex flex-col md:flex-row justify-between">
        <Link className="flex items-center" href="/">
          <Logo LogoTheme={'dark'} />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:w-[calc(100%/2)] mt-7 md:mt-0">
          {/* <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav> */}
          <div className="flex flex-col ">
            <p>Prato_DO é unha axencia independente sen ánimo de lucro, comprometida coa mellora da calidade de vida dende a alimentación, promovendo solucións creativas e rexenerativas en resposta aos retos sociais, económicos e ambientais.</p>
            <CMSLink className="text-black pt-4 underline" appearance="inline" url="mailto:iniciativapratodo@gmail.com" label="Contacta escribíndonos a iniciativapratodo@gmail.com" />
          </div>
        </div>
      </div>
    </footer>
  )
}
