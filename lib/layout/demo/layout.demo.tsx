import React, {Fragment} from 'react';
import Demo from '../../../demo';
import LayoutExample1 from './layout.example.1';
import LayoutExample2 from './layout.example.2';
import LayoutExample3 from './layout.example.3';
import LayoutExample4 from './layout.example.4';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./layout.example.1.tsx').default}>
        <LayoutExample1/>
      </Demo>
      <Demo code={require('!!raw-loader!./layout.example.2.tsx').default}>
        <LayoutExample2/>
      </Demo>
      <Demo code={require('!!raw-loader!./layout.example.3.tsx').default}>
        <LayoutExample3/>
      </Demo>
      <Demo code={require('!!raw-loader!./layout.example.4.tsx').default}>
        <LayoutExample4/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;