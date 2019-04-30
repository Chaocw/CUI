import React, {Fragment} from 'react';
import Demo from '../../../demo';
import DialogExample2 from './dialog.example.2';
import DialogExample3 from './dialog.example.3';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.2.tsx').default}>
        <span>基本Dialog &nbsp;</span>
        <DialogExample2/>
      </Demo>
      <Demo code={require('!!raw-loader!./dialog.example.2.tsx').default}>
        <span>定制dialog &nbsp;</span>
        <DialogExample3/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;