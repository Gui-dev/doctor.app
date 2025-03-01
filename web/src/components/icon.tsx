import type { SVGProps } from 'react'

type IconName = 'appointment' | 'arrow-left' | 'home' | 'eye-off' | 'eye-on'

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  childrenClassName?: string
}

export const Icon = ({
  name,
  children,
  childrenClassName,
  ...rest
}: IconProps) => {
  if (children) {
    return (
      <span className={`flex items-center gap-2 ${childrenClassName}`}>
        <Icon name={name} {...rest} />
        {children}
      </span>
    )
  }

  return (
    <>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg {...rest}>
        <use href={`./sprite.svg#${name}`} />
      </svg>
    </>
  )
}
