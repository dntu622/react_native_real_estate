import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeDetailView extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          { /* other code from before here */ }
        
        <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
}