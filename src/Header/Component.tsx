import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header({ locale }: { locale: any }) {
  const header: Header = await getCachedGlobal('header', 1, locale)()

  return <HeaderClient header={header} />
}
