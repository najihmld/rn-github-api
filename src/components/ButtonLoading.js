import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const ButtonLoading = props => {
  return (
    <Button
      buttonStyle={styles.button}
      title={props.title}
      loading={props.loading}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: '#24292e',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f6f8fa',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default ButtonLoading;
