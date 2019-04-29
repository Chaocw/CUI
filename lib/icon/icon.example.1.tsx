import Icon from "./icon"
import React from 'react'

const IconExample1: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name='alipay' style={{color: 'red'}}/>
      <Icon name='wechat' />
      <Icon name='qq' />
      <Icon name='facebook' />
    </div>
  )
}

export default IconExample1