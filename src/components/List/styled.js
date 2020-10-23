import styled from 'styled-components';
import { List } from 'react-native-paper';

const { Section, Item, Icon } = List;

export const CustomSection = styled(Section)`
  width: 100%;
  flex: 1;
`;

export const CustomItem = styled(Item)`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CustomIcon = styled(Icon)`
  background-color: #eeeeee;
`;
