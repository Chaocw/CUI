import React from 'react'
import {alert, confirm, modal} from "../dialog"
import Button from "../../button/button"

export default function () {
  const openModal = () => {
    const close = modal(<h1>你好
      <button onClick={() => close()}>close</button>
    </h1>)
  }

  return (
    <div>
      <Button type='danger' onClick={() => alert('123')}>alert</Button>
      <Button type='dashed' onClick={() => confirm('123', () => {
        console.log(`你点击了yes`)
      }, () => {
        console.log(`你点击了no`)
      })}>confirm
      </Button>
      <Button type='primary' onClick={openModal}>modal</Button>
    </div>
  )
}