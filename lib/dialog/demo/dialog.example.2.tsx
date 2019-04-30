import React, {useState} from 'react'
import Dialog from "../dialog"
import Button from "../../button/button"

export default function () {
  const [y, setY] = useState(false)

  return (
    <div>
      <Button type='primary' onClick={() => setY(!y)}>open dialog</Button>
      <Dialog visible={y} closeOnClickMask={true} buttons={
        [
          <button onClick={() => {
            setY(false)
          }}>1</button>,
          <button onClick={() => {
            setY(false)
          }}>2</button>
        ]
      } onClose={() => {
        setY(false)
      }}>
        <strong>hi</strong>
      </Dialog>
    </div>
  )
}