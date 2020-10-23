import React, { useState } from 'react';
import Toast from 'react-native-simple-toast';
import { Container } from './src/components/Container';
import { Heading } from './src/components/Text';
import { Input } from './src/components/Input';
import { Button } from './src/components/Button';
import { List } from './src/components/List';

const App = () => {
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = description => {
    if (description == '') {
      Toast.show('Please provide a description', Toast.SHORT);
    } else {
      setTodos([...todos, { description }]);
      setDescription('');
    }
  };

  const removeTodo = id => {
    setTodos([...todos.filter((todo, index) => index !== id)]);
  };

  return (
    <Container>
      <Heading>Todo App</Heading>
      <Input value={description} onChangeText={text => setDescription(text)} />
      <Button onPress={() => addTodo(description)}>Add todo</Button>
      <List todos={todos} onRemove={removeTodo} />
    </Container>
  );
};

export default App;
