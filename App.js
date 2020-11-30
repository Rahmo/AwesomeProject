/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View,Text, StatusBar, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'uuidv4';

const App: () => React$Node = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'butter'},
    {id: uuid(), text: 'Juice'},
    {id: uuid(), text: 'bread'},
  ]);
  const renderItem = ({item}) => <ListItem item={item} />;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Header title="Shopping List" />
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
