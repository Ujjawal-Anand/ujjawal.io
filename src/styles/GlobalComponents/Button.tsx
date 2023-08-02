import React, { ReactNode, MouseEvent } from 'react'

import { ButtonBack, ButtonFront } from './index'
interface ButtonProps {
  children: ReactNode;
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
const Button = (props: ButtonProps) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button
