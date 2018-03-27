import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class UpdateView extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          { /* other code from before here */ }
        
        <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('StackUpdateDetail')}
          />
        </View>
      );
    }
  }