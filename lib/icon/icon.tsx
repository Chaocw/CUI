import React, {ReactElement} from 'react'
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name?: string,
  component?: ReactElement
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, component, ...restProps}) => {
    return (
      <svg className={classes('fui-icon', className)}
           {...restProps}>
        {component || <use xlinkHref={`#${name}`}/>}
      </svg>
    );
  };

export default Icon;