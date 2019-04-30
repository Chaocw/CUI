import React, {Fragment} from 'react';
import Demo from '../../../demo';
import ButtonExample1 from "./button.example.1"

const ButonDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./button.example.1.tsx').default}>
        <ButtonExample1/>
      </Demo>
    </Fragment>
  );
};

export default ButonDemo;