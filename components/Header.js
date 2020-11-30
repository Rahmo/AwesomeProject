import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Header = ({title}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </>
  );
};

Header.defaultProps = {
  title: 'shopping list',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {color: '#fff', fontSize: 24, textAlign: 'center'},
});

export default Header;
