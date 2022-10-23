import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SearchBar, Button, Text } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function LoginPage({ navigation }) {

  const fetchFonts = () =>
    Font.loadAsync({
      'Hakuna-Sans': require('../../assets/Hakuna-Sans.otf'),
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <View style={styles.innerContainer}>
      <View style={{position: 'absolute', top: 0, left: 2}}>
        <Image style={{bottom: 0}} source={require('../images/e2.png')}/>
      </View>
        <Text style={styles.blackText}>MOMO</Text>
        <View display="flex" flexDirection="row">
          <View style={{paddingRight: 10}}>
            <Button
              style={{marginTop: 20}}
              buttonStyle={{borderRadius: 30, backgroundColor: '#66F0CC', borderWidth: 4, borderColor: '#66F0CC'}}
              title="Log In"
              onPress={() => {
                navigation.navigate('Home');
              }}
              titleStyle={{color: "#242424", fontFamily: 'Hakuna-Sans'}}
            />
            <Button
              style={{marginTop: 15, width: 120 }}
              buttonStyle={{borderRadius: 30, borderColor: '#66F0CC', borderWidth: 4}}
              title="Sign Up"
              onPress={() => {
                navigation.navigate('Camera');
              }}
              titleStyle={{color: "#66F0CC", fontFamily: 'Hakuna-Sans'}}
              type="outline"
            />
          </View>
          <View>
            <View style={{ position: 'relative', left: 20, top: 15 }}>
              <Image source={require('../images/logo.png')}/>
            </View>
          </View>
        </View>
      <View display="flex" flexDirection="row" justifyContent="flex-end">
      </View>
      <View style={{position: 'absolute', bottom: 0, right: 2}}>
        <Image style={{bottom: 0}} source={require('../images/e1.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#66F0CC",
  },
  innerContainer: {
    backgroundColor: "#F3F3F3",
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    height: "100%"
  },
  darkGreen: {
    backgroundColor: "#387364"
  },
  blackText: {
    right: 50,
    fontSize: 65,
    color: "#242424",
    fontFamily: 'Hakuna-Sans'
  },
  white: {
    backgroundColor: "#F3F3F3"
  }
});
