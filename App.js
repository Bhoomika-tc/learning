
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import Carousel from './components/carousel';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.cardlp}>
      <View style={styles.cardsec}>
        <View style={styles.cardContents}>
          <View style={styles.heading}>
            <View style={styles.textContainer}>
              <Text style={styles.gm}>Good Morning</Text>
              <Text style={styles.title}>Yunus</Text>
            </View>
            <Image style={styles.img} source={require('./assets/notification.png')} />
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
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardlp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsec: {
    marginTop: 40,
    marginBottom: 'auto',
    borderRadius: 50,
    borderWidth: 5,
    width: '100%',
    minHeight: '90%',
    borderColor: '#fff',
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
    marginTop: 30,
    shadowColor: 'black',
    elevation: 8,
  },
  input: {
    height: '100%',
    padding: 10,
    fontSize: 18,
  },
});
