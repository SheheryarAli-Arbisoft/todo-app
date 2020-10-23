import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
