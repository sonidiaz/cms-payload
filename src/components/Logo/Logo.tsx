import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  LogoTheme?: string
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={300}
      height={300}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[6rem] w-full', className)}
      src={props.LogoTheme === 'dark' ? '/img/logo-black.png' : '/img/logo-white.png'}
    />
  )
}
