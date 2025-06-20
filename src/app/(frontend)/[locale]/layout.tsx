import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
// import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getMessages } from 'next-intl/server'
import { getServerSideURL } from '@/utilities/getURL'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { TypedLocale } from 'payload'
import localization from '@/i18n/localization'

type Args = {
  children: React.ReactNode
  params: Promise<{
    locale: TypedLocale
  }>
}
export default async function RootLayout({ children, params }: Args) {
  // const { locale = 'gl' } = await params
  const { locale } = await params
  // const currentLocale = localization.locales.find((loc) => loc.code === locale)

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  setRequestLocale(locale)

  const { isEnabled } = await draftMode()
  const messages = await getMessages()

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang={locale}
      suppressHydrationWarning
      data-theme="light"
    >
      <head>
        <InitTheme />
        <link href="/favicon-pratodo.png" rel="icon" sizes="32x32" />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />
            <Header locale={locale} />
            {children}
            {/* <Footer locale={locale} /> */}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
