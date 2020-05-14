import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import axios from 'axios';

class Home extends Component {
  state = {
    listRepo: [],
  };
  getListRepo = () => {
    console.log('halo');
    axios.get('https://api.github.com/users/najihmld/repos').then(res => {
      console.log(res.status);

      if (res.status === 200) {
        this.setState({
          listRepo: res.data,
        });
        console.log(this.state.listRepo);
      }
    });
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.logoScreen}>
          <Image style={styles.logo} source={require('../assets/github.png')} />
          <Text style={styles.title}>
            Silahkan masukan username akun Github untuk menampilkan list
            repository.
          </Text>
        </View>
        <Card>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            placeholder="Username"
          />
          <TouchableOpacity onPress={() => this.getListRepo()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#f6f8fa',
    justifyContent: 'center',
  },
  logoScreen: {
    flex: 0.8,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 130,
    height: 130,
    margin: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
  },

  textInput: {
    backgroundColor: '#eaeaea',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#24292e',
    borderWidth: 1.5,
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    maxHeight: 40,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#24292e',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f6f8fa',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default Home;
