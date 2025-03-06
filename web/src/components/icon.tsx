import clsx from 'clsx'
import type { SVGProps } from 'react'

export type IconName =
  | 'appointment'
  | 'arrow-left'
  | 'home'
  | 'eye-off'
  | 'eye-on'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export const Icon = ({ name, children, className, ...rest }: IconProps) => {
  if (children) {
    return (
      <span className={clsx('flex items-center gap-2', className)}>
        <Icon name={name} {...rest} />
        {children}
      </span>
    )
  }

  return (
    <>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg {...rest} className={clsx(className)}>
        <use href={`./sprite.svg#${name}`} />
      </svg>
    </>
  )
}
