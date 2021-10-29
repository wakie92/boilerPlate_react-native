import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native';

const WelcomePage = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return <View />;
};

export default WelcomePage;
