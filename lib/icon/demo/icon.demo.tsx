import IconExample1 from './icon.example.1';
import React, {Fragment} from 'react';
import Demo from '../../../demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./icon.example.1.tsx').default}>
        <IconExample1/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;