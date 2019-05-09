import {useState} from "react"
import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer"
import Button from "../../lib/button/button"
import * as styles from '../example.scss'

interface Props {
  code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className={className} style={{borderRadius: '3px', ...style}}>
            <pre style={{overflowX: 'auto',padding: '5px 8px'}}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
        </div>
      )}
    </Highlight>
  )
  return (
    <div>
      <div className={styles.example}>
        {props.children}
      </div>
      <Button onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
      <div style={{maxWidth: '50vw', overflow: 'auto'}}>
        {codeVisible && code}
      </div>
    </div>
  )
}

export default Demo