import React, {Fragment} from 'react';
import Demo from '../../../example/components/demo';
import LayoutExample1 from './layout.example.1';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./layout.example.1.tsx').default}>
        <LayoutExample1/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;