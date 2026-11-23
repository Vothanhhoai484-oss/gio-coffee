
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
});
