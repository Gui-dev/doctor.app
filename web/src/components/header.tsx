import Link from 'next/link'
import type { ReactNode } from 'react'

import clsx from 'clsx'
import { Icon, type IconName } from './icon'

interface IHeaderProps {
  children?: ReactNode
  title?: string
  href: string
  iconName?: IconName
  iconClassName?: string
}

export const Header = ({
  children,
  href,
  iconName = 'arrow-left',
  iconClassName,
  title,
}: IHeaderProps) => {
  return (
    <div
      className={clsx('flex w-full items-center gap-2', {
        'justify-between': children,
      })}
    >
      {children ? <>{children}</> : null}
      <Link
        href={href}
        className="flex size-10 items-center justify-center rounded-full border border-gray-800 text-gray-100"
      >
        <Icon name={iconName} className={`${iconClassName}`} />
      </Link>
      {!children ? <h1 className="font-semibold text-xl">{title}</h1> : null}
    </div>
  )
}
