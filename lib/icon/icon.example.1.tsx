import Icon from "./icon"
import React from 'react'

const IconExample1: React.FunctionComponent = () => {
  return (
    <>
      <Icon name='alipay' style={{color: 'red'}}/>
      <Icon name='wechat' />
      <Icon name='qq' />
      <Icon name='facebook' />
    </>
  )
}

export default IconExample1