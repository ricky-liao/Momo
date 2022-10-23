import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default function HomePage({ navigation }) {
  const [search, setSearch] = useState("");

  updateSearch = (query) => {
    setSearch({ query });
  }
  return (
    <View style={styles.container}>
      <SearchBar 
        placeholder='Search Friends'
        onChangeText={this.updateSearch}
        value={search}
        platform="ios"
      />
      <Text>Home</Text>
      <Button
        title="Camera"
        onPress={() => {
          navigation.navigate('Camera');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    margin: "5"
  }
});
