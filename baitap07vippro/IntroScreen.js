import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window'); // Lấy cả chiều rộng và chiều cao của màn hình

const IntroScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      image: require('./assets/3.jpeg'), // Thay bằng đường dẫn ảnh của bạn
      title: 'Scan, Pay & Enjoy!',
      description: 'Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!',
    },
    {
      image: require('./assets/2.jpg'), // Thay bằng ảnh khác
      title: 'Fast and Secure!',
      description: 'Make fast and secure payments in just a few clicks with no hassle.',
    },
    {
      image: require('./assets/1.jpg'), // Thay bằng ảnh khác
      title: 'Track your Orders!',
      description: 'Get real-time updates on your orders and delivery.',
    },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(scrollPosition / width);
    setCurrentPage(pageIndex);
  };

  const handleNextPress = () => {
    if (currentPage === pages.length - 1) {
      navigation.navigate('HomeScreen'); // Điều hướng đến màn hình HomeScreen
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {pages.map((page, index) => (
          <View key={index} style={styles.page}>
            <Image source={page.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{page.title}</Text>
              <Text style={styles.description}>{page.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentPage === index ? styles.activeDot : null]}
          />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>
          {currentPage === pages.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    width: width, // Full chiều rộng màn hình
    height: height, // Full chiều cao màn hình
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width, // Full chiều rộng của hình ảnh
    height: height * 0.65, // Hình ảnh chiếm 65% chiều cao màn hình
    resizeMode: 'contain', // Đảm bảo hình ảnh hiển thị đầy đủ mà không bị kéo giãn
  },
  textContainer: {
    marginTop: 20, // Đẩy văn bản xuống phía dưới hình ảnh
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
  nextButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IntroScreen;
