import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Moment from 'moment';

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
          contentContainerStyle={styles.listContainer}
          renderItem={({item, index}) => {
            return (
              <View style={styles.list}>
                <Text style={styles.date}>
                  {Moment(item.created_at).format('MMM Do YY')}
                </Text>
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
  listContainer: {
    paddingVertical: 15,
  },
  list: {
    elevation: 8,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 80,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  date: {
    fontSize: 12,
    color: '#6a6a6a',
  },
  title: {
    fontSize: 14,
  },
});

export default Repo;
