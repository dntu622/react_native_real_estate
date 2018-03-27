import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

GoogleSignin.configure({
  iosClientId: "147502817443-tbhdpfnapa5uekbkbd8qta20qgq9sptq.apps.googleusercontent.com",
})
.then(() => {
  // you can now call currentUserAsync()
});

export default class MoreView extends React.Component {
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text>More View</Text>
          
          <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
          {/* <TouchableOpacity onPress={this.googleAuth.bind(this)}>
            <Text>Login with Google</Text>
          </TouchableOpacity> */}
          <GoogleSigninButton
            style={{width: 48, height: 48}}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.googleAuth.bind(this)}/>
        </View>
      );
    }
    // componentDidMount() {
    //   this.setupGoogleSignin();
    // }
  
    googleAuth() {
      GoogleSignin.signIn()
        .then((user) => {
          alert(user.accessToken);
        })
        .catch((err) => {
          alert('WRONG SIGNIN');
        })
        .done();
    }
  
    // async setupGoogleSignin() {
    //   try {
    //     await GoogleSignin.hasPlayServices({ autoResolve: true });
    //     await GoogleSignin.configure({
    //       iosClientId: settings.iosClientId,
    //       webClientId: settings.webClientId,
    //       offlineAccess: false
    //     });
  
    //     const user = await GoogleSignin.currentUserAsync();
    //     console.log(user);
    //   }
    //   catch (err) {
    //     console.log("Google signin error", err.code, err.message);
        
    //   }
    // }
}