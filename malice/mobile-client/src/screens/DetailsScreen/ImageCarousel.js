import React, { useState, useCallback } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions
} from 'react-native';

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const onFlatlistUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={[styles.image, { width: windowWidth - 40 }]}
            source={{ uri: item }}
            key={Math.random().toString()}
          />
        )}
        keyExtractor={(item, index) => item.toString()}
        key={Math.random().toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#ec6b41' : '#fff'
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    height: 250,
    resizeMode: 'contain',
    margin: 10
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
    backgroundColor: '#ccc'
  }
});

export default ImageCarousel;
