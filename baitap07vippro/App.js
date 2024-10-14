import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen';  // Đảm bảo tên file đúng
import ScanScreen from './ScanScreen';
import CartScreen from './CartScreen';
import IntroScreen from './IntroScreen';  // Đảm bảo file và component là "Home" chứ không phải "home"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        {/* Màn hình giới thiệu hoặc trang chính */}
        <Stack.Screen 
          name="IntroScreen" 
          component={IntroScreen} 
          options={{ headerShown: false }}  // Ẩn header của trang Home
        />

        {/* Màn hình chính sau phần giới thiệu */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }} 
        />

        {/* Màn hình quét (ScanScreen) */}
        <Stack.Screen 
          name="Scan" 
          component={ScanScreen} 
          options={{ title: 'Scan' }} 
        />

        {/* Màn hình giỏ hàng (CartScreen) */}
        <Stack.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ title: 'Cart' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
