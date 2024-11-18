// import React from 'react';
import React, { useRef } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import { sliderData } from './sliderdata';

const { width } = Dimensions.get('window');

const Carousel = () => {
  const flatListRef = useRef(null);

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / (width * 0.8));

    // Check if it's the last slide
    if (currentIndex === sliderData.length) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={[...sliderData, sliderData[0]]} 
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width * 0.8}
      decelerationRate="fast"
      onMomentumScrollEnd={handleScrollEnd}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:15,
  },
  image: {
    width: '100%',
    height: '85%',
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Carousel;
