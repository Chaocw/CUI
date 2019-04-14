import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e);
};

ReactDOM.render(<div>
  <Icon
    name="qq"
    onClick={fn}
    onMouseEnter={() => console.log('enter')}
    onMouseLeave={() => console.log('leave')}
  />
</div>, document.querySelector('#root'));
