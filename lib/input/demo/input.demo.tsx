import React, {Fragment} from 'react';
import Demo from '../../../example/components/demo';
import InputExample from './input.example'

const InputDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./input.example.tsx').default}>
        <InputExample/>
      </Demo>
    </Fragment>
  );
};

export default InputDemo;