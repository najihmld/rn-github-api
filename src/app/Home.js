import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Repo"
          onPress={() => this.props.navigation.navigate('Repo')}
        />
      </View>
    );
  }
}

export default Home;
