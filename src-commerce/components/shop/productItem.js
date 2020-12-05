import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export default function productItem(props) {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <TouchableCmp onPress={props.onSelect}>
        <Image style={styles.image} source={{uri: props.image}} />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>Rp. {props.price.toFixed(2)}</Text>
        </View>
      </TouchableCmp>

      <View style={styles.actions}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: 'OpenSans-Bold',
  },
  price: {
    fontSize: 14,
    color: 'black',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  detailContainer: {
    padding: 10,
    alignItems: 'center',
  },
});
