/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import ListView from './components/listview/ListView';
import ListHeroes from './components/listview/data/MockListHeroes';

type Props = {};
export default class App extends Component<Props> {
  heroes = ListHeroes;

  render() {
    return (
      <View style={styles.container}>
        <ListView heroes={this.heroes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
