import React, {useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { SearchBar, Text, Button, Image, ListItem, Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

export default function HomePage({ navigation }) {
  const [search, setSearch] = useState("");

  const list = [
    {
      name: 'RJ Mao',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Oct. 23',
      cost: '-4.50'
    },
    {
      name: 'Ricky Liao',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Oct. 22',
      cost: '-4.50'
    },
  ];

  updateSearch = (query) => {
    if (query) {
      setSearch({ query });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar 
        containerStyle={{backgroundColor: "#F3F3F3"}}
        placeholder='Search Friends'
        onChangeText={(e) => updateSearch(e)}
        value={search}
        platform="ios"
      />
      <View style={{marginLeft: 6, marginTop: 10}}>
        <Text style={{marginBottom: 10}} h4>Pending Requests</Text>
        
        <View display="flex" flexDirection="row" style={{marginBottom: 10}}>
          <Button title="placeholder" />
          <Button title="placeholder" />
          <Button title="placeholder" />
        </View>
        <Text style={{marginTop: 20}} h4>Transaction History</Text>
      </View>
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
      <Button
        title="Camera"
        onPress={() => {
          navigation.navigate('Camera');
        }}
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "#F3F3F3",
  }
});
