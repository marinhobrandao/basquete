import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

// Substitua pelo caminho da sua imagem local de placeholder
const placeholder = require('@/assets/images/placeholder.png');

type Props = {
  uri?: string;
  size?: number;
};

export default function LogoImage({ uri, size = 60 }: Props) {
  const [error, setError] = useState(false);

  return (
    <Image
      source={error || !uri ? placeholder : { uri }}
      style={[styles.logo, { width: size, height: size, borderRadius: size / 2 }]}
      resizeMode="contain"
      onError={() => setError(true)}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
