import React, { useState } from 'react'
import Input from '../input'
import styles from './input.example.scss';

const InputExample: React.FunctionComponent = () => {
  const [inputVal1, setInputVal1] = useState()
  const [inputVal2, setInputVal2] = useState()
  const [inputVal3, setInputVal3] = useState()
  const [inputVal4, setInputVal4] = useState()
  return (
    <>
      <div className={styles.inputExampleDemo}>
        <p className={styles.inputExampleH1}>基本使用</p>
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputVal1(e.currentTarget.value)}
          value={inputVal1}
        />
      </div>
      <div className={styles.inputExampleDemo}>
        <p className={styles.inputExampleH1}>设置大小</p>
        <Input
          placeholder="Basic usage"
          size="small"
          onChange={(e) => setInputVal2(e.currentTarget.value)}
          value={inputVal2}
        />
        <span style={{marginRight: '10px'}}></span>
        <Input
          placeholder="Basic usage"
          onChange={(e) => setInputVal3(e.currentTarget.value)}
          value={inputVal3}
        />
        <span style={{marginRight: '10px'}}></span>
        <Input
          size="large"
          placeholder="Basic usage"
          onChange={(e) => setInputVal4(e.currentTarget.value)}
          value={inputVal4}
        />
      </div>
    </>
  )
}

export default InputExample