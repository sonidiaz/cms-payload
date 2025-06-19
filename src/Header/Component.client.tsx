'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { useLocale } from 'next-intl'
import localization from '@/i18n/localization'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TypedLocale } from 'payload'
import { usePathname, useRouter } from '@/i18n/routing'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  useEffect(() => {
    setHeaderTheme('light')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="container relative z-20 py-8 flex justify-end items-center gap-2"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <Link href="/" className="me-auto">
        <Logo LogoTheme={'light'} />
      </Link>
      <HeaderNav data={header} />
      <LocaleSwitcher />
    </header>
  )
}

function LocaleSwitcher() {
  // inspired by https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/components/LocaleSwitcherSelect.tsx
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: TypedLocale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
    })
  }

  return (
    <div className="flex items-center gap-4">
      <div className="md:flex gap-2">
        {localization.locales
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((loc) => (
            <button
              key={loc.code}
              aria-label={loc.label}
              onClick={() => onSelectChange(loc.code as TypedLocale)}
              className={`px-2 py-1 text-sm rounded-lg transition-colors ${
                locale === loc.code
                  ? 'bg-white rounded- text-primary-foreground'
                  : 'hover:bg-primary/10'
              }`}
            >
              {loc.label}
            </button>
          ))}
      </div>
      <div className="hidden">
        <Select onValueChange={onSelectChange} value={locale}>
          <SelectTrigger className="w-auto text-sm bg-transparent gap-2 pl-0 md:pl-3 border-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {localization.locales
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((loc) => (
                <SelectItem value={loc.code} key={loc.code}>
                  {loc.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
