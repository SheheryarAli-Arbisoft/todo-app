import React from 'react';
import { CustomHeading } from './styled';
import { propTypes, defaultProps } from './props';

export const Heading = ({ children, ...rest }) => {
  return <CustomHeading {...rest}>{children}</CustomHeading>;
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
