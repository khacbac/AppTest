/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ART,
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class GoogleSigninApp extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // try {
    this._configureGoogleSignIn();
    //   let hasPlayServices = await GoogleSignin.hasPlayServices({
    //     showPlayServicesUpdateDialog: true
    //   });
    //   // google services are available
    //   console.log("BACHK_hasPlayServices: ", hasPlayServices);
    // } catch (err) {
    //   console.error("play services are not available");
    // }
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        "477766041776-3dl3l8gasvvh1j1tg724hbn11h4bcmd6.apps.googleusercontent.com",
      offlineAccess: false,
      iosClientId:"477766041776-3dl3l8gasvvh1j1tg724hbn11h4bcmd6.apps.googleusercontent.com"
    });
  }

  // Somewhere in your code
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("BACHK_userInfo: ", userInfo);
      //   this.setState({ userInfo });
    } catch (error) {
      console.log("BACHK_error: ", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.signIn()}>
          <Text>Google Signin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
