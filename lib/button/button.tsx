import React from 'react'
import {scopedClassMaker} from '../helpers/classes';
import './button.scss'

const sc = scopedClassMaker('gu-button');

interface Props extends React.HTMLAttributes<HTMLElement>{
  type?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, type, ...rest} = props
  return (
    <button className={sc({[type || '']: true, '': true}, {extra: className})} {...rest}>
      {props.children}
    </button>
  )
}
export default Button