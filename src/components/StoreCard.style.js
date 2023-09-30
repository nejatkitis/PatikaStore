import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  inner_body: {
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    height: Dimensions.get('window').height / 4.5,
    width: Dimensions.get('window').width / 2.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'lightslategrey',
  },
  noStock: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
