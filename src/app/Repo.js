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
              <View style={styles.list}>
                <Text style={styles.title}>{item.full_name}</Text>
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
    backgroundColor: '#f6f8fa',
  },
  list: {
    elevation: 8,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    minHeight: 80,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
  },
});

export default Repo;
