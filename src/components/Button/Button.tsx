import React, { PropsWithChildren } from 'react'
import './Button.scss'

interface IButtonProps extends PropsWithChildren {
  disabled?: boolean
  type?: 'primary' | 'light'
  onClick?: () => void
  className?: string
}

const Button = ({
  children,
  disabled = false,
  type = 'primary',
  onClick,
  className,
}: IButtonProps) => {
  const disabledClass = disabled ? 'btn--disabled' : ''
  const typeClass = `btn--${type}`
  const classList = `btn ${[disabledClass, typeClass, className]
    .filter((el) => el !== '')
    .join(' ')}`

  return (
    <button className={classList} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
