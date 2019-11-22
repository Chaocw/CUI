import React, {Fragment} from 'react';
import Demo from '../../../example/components/demo';
import DialogExample2 from './dialog.example.2';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./dialog.example.2.tsx').default}>

        <DialogExample2/>

      </Demo>
    </Fragment>
  );
};

export default IconDemo;
