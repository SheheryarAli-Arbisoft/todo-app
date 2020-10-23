import React from 'react';
import { Divider } from 'react-native-paper';
import { CustomSection, CustomItem, CustomIcon } from './styled';
import { propTypes, defaultProps } from './props';

export const List = ({ titleStyle }) => {
  return (
    <CustomSection>
      <CustomItem
        title='List item'
        titleStyle={titleStyle}
        right={props => <CustomIcon {...props} icon='close' />}
      />
      <Divider />
    </CustomSection>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
