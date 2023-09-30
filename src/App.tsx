import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import StoreCard from './components/StoreCard';
import store_data from './data/store_data.json';

function PatikaStore() {
  return (
    <SafeAreaView style={styles.base}>
      <Text style={styles.main_text}>Patika Store</Text>
      <View style={styles.search_area}>
        <TouchableOpacity>
          <TextInput style={styles.search_text} caretHidden={true}>
            Ara...
          </TextInput>
        </TouchableOpacity>
      </View>
      <FlatList
        data={store_data}
        renderItem={({item}) => <StoreCard store={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'aliceblue',
    justifyContent: 'space-around',
  },
  search_area: {
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    margin: 10,
  },
  main_text: {
    fontSize: 30,
    color: 'blueviolet',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'courier',
    textDecorationLine: 'underline',
  },
  search_text: {
    fontSize: 18,
    color: 'lightslategray',
    textAlign: 'left',
    padding: 10,
  },
});
export default PatikaStore;
