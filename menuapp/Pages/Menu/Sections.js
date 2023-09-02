import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({ menusections }) {
  const [isVisible, setIsVisible] = useState(true);
  const [btnprsd, setBtnprsd] = useState([]);
  let displayView = (
    <View style={styles.newhomecont}>
      {
        btnprsd.map((btnprsds) => { 
            const imagePath  = btnprsds.image_url;
          return (
            <Text style={styles.mnutext} key={btnprsds.dish_name}>
              <Image source={{ uri: imagePath }} style={styles.img} />{'\n'}
              Dish Name: {btnprsds.dish_name}{'\n'}
              Description: {btnprsds.description}{'\n'}
              Price: {btnprsds.price}${'\n'}
              Rating: {btnprsds.rating}{'\n'}
            </Text>
          );
        })
      }
    </View>
  );

  return (
    <View style={styles.homecont}>
      {isVisible ? (
        menusections.map((menusection) => {
          return (
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                setIsVisible(false);
                setBtnprsd(menusection.dishes);
              }}
              key={menusection.section_name}
            >
              <Text style={{ fontSize: 16, color: '#17202A', fontWeight: 'bold' }}>{menusection.section_name}</Text>
            </TouchableOpacity>
          );
        })
      ) : (
        displayView
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mnutext: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#E59866',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  newhomecont: {
    flex: 1,
    backgroundColor: '#F5CBA7',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:20
  },
  img: {
    width: 100,
    height: 80,
    alignSelf: 'center',
  },
  homecont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5CBA7',
  },
  buttons: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#E59866',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 5,
  },
});
/**
              <Image source={require()} style={styles.img} />{'\n'}
 * 
 */