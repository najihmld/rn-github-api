import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet, Keyboard} from 'react-native';
import axios from 'axios';

import Card from '../components/Card';
import ButtonLoading from '../components/ButtonLoading';

class Home extends Component {
  state = {
    loading: false,
    listRepo: [],
    message: '',
    username: '',
  };
  inputText = text => {
    this.setState({username: text});
  };
  getListRepo = () => {
    Keyboard.dismiss();
    this.setState({loading: true});
    axios
      .get(`https://api.github.com/users/${this.state.username}/repos`)
      .then(res => {
        if (res.status === 200) {
          setTimeout(() => {
            this.setState({
              listRepo: res.data,
              message: '',
              loading: false,
            });
            this.props.navigation.navigate('Repo', {data: this.state.listRepo});
          }, 1000);
        }
      })
      .catch(err => {
        setTimeout(() => {
          this.setState({
            message: err.response.data.message,
            loading: false,
          });
          console.log(this.state);
        }, 1000);
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
        <View />
        <Card>
          <TextInput
            style={
              this.state.message.length > 0
                ? styles.textInputRed
                : styles.textInput
            }
            onChangeText={text => this.inputText(text)}
            underlineColorAndroid="transparent"
            placeholder="Username"
          />
          <ButtonLoading
            title="Next"
            loading={this.state.loading}
            onPress={() => this.getListRepo()}
          />
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
  textInputRed: {
    backgroundColor: '#eaeaea',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: 'red',
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
