import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCrad.style';

const storeCard = ({store}) => {
  const priceControl = ({inStock}) => {
    return store.inStock === true ? store.price : 'STOKTA YOK';
  };
  const stockControl = ({inStock}) => {
    return store.inStock === true ? styles.price : styles.noStock;
  };
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={{uri: store.imageUrl}} />
      <View style={styles.inner_body}>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={stockControl(store.inStock)}>
          {priceControl(store.inStock)}
        </Text>
      </View>
    </View>
  );
};

export default storeCard;
