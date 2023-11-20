import React, { PropsWithChildren } from 'react'
import './ButtonLight.scss'

interface IButtonLightProps extends PropsWithChildren {
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset' | undefined
}

const ButtonLight = ({
  children,
  onClick,
  type = undefined,
}: IButtonLightProps) => {
  const className = `btn-light`

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLight
