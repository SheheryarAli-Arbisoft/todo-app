import React from 'react';
import { Provider } from 'react-redux';
import { Container } from './src/components/Container';
import { Heading } from './src/components/Text';
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';
import { List } from './src/components/List';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Heading>Todo App</Heading>
        <Input />
        <Button>Add todo</Button>
        <List />
      </Container>
    </Provider>
  );
};

export default App;
