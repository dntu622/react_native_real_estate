import React, { Component } from 'react';
import { Text, View } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

// var Login = React.createClass({
//   render: function() {
//     return (
//       <View>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("login has error: " + result.error);
//               } else if (result.isCancelled) {
//                 alert("login is cancelled.");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     alert(data.accessToken.toString())
//                   }
//                 )
//               }
//             }
//           }
//           onLogoutFinished={() => alert("logout.")}/>
//       </View>
//     );
//   }
// });

export default class MoreView extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          { /* other code from before here */ }
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
        </View>
      );
    }
}