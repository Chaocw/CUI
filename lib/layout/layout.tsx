import React from 'react'
import {scopedClassMaker} from '../helpers/classes';
import './layout.scss'

const sc = scopedClassMaker('gu-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={sc('layout', {extra: className})} {...rest}>
      {props.children}
    </div>
  )
}
export default Layout