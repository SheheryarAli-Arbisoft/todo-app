import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { CustomSection, CustomItem } from './styled';
import { propTypes, defaultProps } from './props';

export const List = ({ todos, onRemove: removeTodo, titleStyle }) => {
  const items = todos.map((todo, index) => (
    <Fragment>
      <CustomItem
        title={todo.description}
        titleStyle={titleStyle}
        onPress={() => removeTodo(index)}
      />
      <Divider />
    </Fragment>
  ));

  return (
    <CustomSection>
      <ScrollView>{items}</ScrollView>
    </CustomSection>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
