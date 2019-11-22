import React, { useState } from 'react';
import Dialog from '../dialog';
import Button from '../../button/button';
import { alert, confirm, modal } from '../dialog';
import styles from 'lib/input/demo/input.example.scss';

export default function () {
  const [y, setY] = useState(false);
  const openModal = () => {
    const close = modal(<h1>你好
      <button onClick={ () => close() }>close</button>
    </h1>);
  };

  return (
    <>
      <div className={ styles.inputExampleDemo }>
        <p className={ styles.inputExampleH1 }>基本使用</p>
        <Button type='primary' onClick={ () => setY(!y) }>open dialog</Button>
        <Dialog visible={ y } closeOnClickMask={ true } buttons={
          [
            <Button onClick={ () => {
              setY(false);
            } } type="primary">确定</Button>,
            <Button onClick={ () => {
              setY(false);
            } } type="primary">取消</Button>
          ]
        } onClose={ () => {
          setY(false);
        } }>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div className={ styles.inputExampleDemo }>
        <p className={ styles.inputExampleH1 }>定制API</p>
        <Button type='danger' onClick={ () => alert('123') }>alert</Button>
        <Button type='dashed' onClick={ () => confirm('123', () => {
          console.log(`你点击了yes`);
        }, () => {
          console.log(`你点击了no`);
        }) }>confirm
        </Button>
        <Button type='primary' onClick={ openModal }>modal</Button>
      </div>
    </>
  );
}
