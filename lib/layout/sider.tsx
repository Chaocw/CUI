import React from 'react';
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('cc-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Sider: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={ sc('sider', { extra: className }) } { ...rest }>
      { props.children }
    </div>
  );
};
export default Sider;
