import {View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Poppins from './src/components/Poppins/Poppins';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Poppins type="Bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, corporis.{' '}
      </Poppins>

      <Poppins colorText="red">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, corporis.{' '}
      </Poppins>

      <Poppins size={40}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, corporis
      </Poppins>

      <Poppins type="ExtraBold">hallo</Poppins>

      <Poppins type="Italic" color="#afbfcc" size={25}>
        hallo semuanya
      </Poppins>
    </View>
  );
}
