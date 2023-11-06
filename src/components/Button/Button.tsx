import { PropsWithChildren } from 'react'
import './Button.scss'

interface IButtonProps extends PropsWithChildren {
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ children, disabled = false, onClick }: IButtonProps) => {
  const disabledClass = disabled ? 'btn--disabled' : ''
  const className = `btn${disabledClass}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
