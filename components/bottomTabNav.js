import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carousel from './carousel';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContents}>
          <View style={styles.heading}>
            <View style={styles.textContainer}>
              <Text style={styles.gm}>Good Morning</Text>
              <Text style={styles.title}>Yunus</Text>
            </View>
            <Image style={styles.img} source={require('../assets/images/notification.png')} />
          </View>
          <View style={styles.searchboxsec}>
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(217, 217, 217)"
              placeholder="Find Your Plant"
            />
          </View>
          <Carousel />


        </View>
      {/* <Text>Home Screen Content</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} /> */}
    </View>
  );
};

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen Content</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cardContents: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 'auto',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gm: {
    color: 'rgb(205, 205, 205)',
    fontSize: 18,
    fontWeight: '600',
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: 30,
  },
  searchboxsec: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 0,
    shadowColor: 'black',
    elevation: 8,
  },
  input: {
    height: '100%',
    padding: 10,
    fontSize: 18,
  },
});
