import * as React from 'react'
import { ButtonStyled } from './Button.style';

type Props = {
  onClick?: () => void,
  children?: React.ReactNode,
  disabled?: boolean,
}

const Button = (props: Props) => {
  const { onClick, children, disabled } = props

  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  )
}

export default Button