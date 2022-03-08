import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Poppins = ({
  type = 'Regular',
  children,
  colorText = 'black',
  size = 12,
}) => {
  // styled
  const style = StyleSheet.create({
    text: {
      fontFamily: `Poppins-${type}`,
      color: colorText,
      fontSize: size,
    },
  });

  return <Text style={style.text}>{children}</Text>;
};

export default Poppins;
