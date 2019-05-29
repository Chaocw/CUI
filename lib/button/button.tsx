import React from 'react'
import {scopedClassMaker} from '../helpers/classes'
import './button.scss'
import Icon from '../icon/icon'

const sc = scopedClassMaker('gu-button')

interface Props extends React.ButtonHTMLAttributes<HTMLElement> {
  icon?: string,
  htmlType?: string,
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, type, icon, htmlType, ...rest} = props
  const classname = sc({'': true, [type || '']: true}, {extra: className})
  return (
    <button className={classname} {...rest} style={{display: icon && 'flex'}}>
      {icon && <Icon name={icon}/>}
      <span>{props.children}</span>
    </button>
  )
}
export default Button