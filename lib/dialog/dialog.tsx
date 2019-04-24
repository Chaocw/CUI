import * as React from "react"
import {Fragment, ReactElement, ReactNode, useEffect} from "react"
import {scopedClassMaker} from '../helpers/classes'
import Icon from "../icon/icon"
import ReactDOM from 'react-dom'
import './dialog.scss';

interface Props {
  visible: boolean,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: boolean,
  buttons?: Array<ReactElement>
}

const scopedClass = scopedClassMaker('fui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }

  function keydownCallback(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      // @ts-ignore
      props.onClose(e)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keydownCallback)
    return () => {
      window.removeEventListener('keydown', keydownCallback)
    }
  })
  const x = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        {props.buttons && <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>}
      </div>
    </Fragment>
    :
    null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}

Dialog.defaultProps = {
  closeOnClickMask: true
}
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component =
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        onClose()
        afterClose && afterClose()
      }}>
      {content}
    </Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose
}

const alert = (content: string) => {
  const button = <button onClick={() => close()}>Ok</button>
  const close = modal(content, [button])
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close()
    yes && yes()
  }
  const onNo = () => {
    close()
    no && no()
  }
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]
  const close = modal(content, buttons, no)
}

export {alert, confirm, modal}
export default Dialog