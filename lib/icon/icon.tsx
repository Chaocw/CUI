import React, {ReactElement} from 'react'
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name?: string,
  component?: ReactElement,
  spin?: boolean
}

const Icon: React.FC<IconProps> =
  ({className, name, component, spin, ...restProps}) => {
    return (
      <svg className={classes('fui-icon', className, spin ? 'spin' : '')}
           {...restProps}>
        {component || <use xlinkHref={`#${name}`}/>}
      </svg>
    );
  };

export default Icon;
