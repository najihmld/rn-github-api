import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

class Repo extends Component {
  state = {
    data: this.props.route.params.data,
  };
  render() {
    return (
      <View style={styles.screen}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Repo;
