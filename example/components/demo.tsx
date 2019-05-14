import {useState} from "react"
import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer"
import Button from "../../lib/button/button"
import * as styles from '../styles/example.scss'

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
              {tokens.map((line, i) => {
                const excludes = ['import', 'export']
                const sign = line.reduce((flag, token) => {
                  if(excludes.includes(token.content) || token.empty){
                    return true
                  }
                  return flag
                }, false)
                if(sign) {return}
                return (
		              <div {...getLineProps({line, key: i})}>
			              {line.map((token, key) => {
			              	return (
                        <span {...getTokenProps({token, key})} />
				              )
			              })}
		              </div>
	              )
              })}
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
      <div style={{maxWidth: '800px', overflow: 'auto', marginTop: '16px'}}>
        {codeVisible && code}
      </div>
    </div>
  )
}

export default Demo