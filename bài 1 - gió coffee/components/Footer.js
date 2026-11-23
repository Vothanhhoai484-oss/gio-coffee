
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.line}>
        MENU | ĐẶT MÓN | ĐƠN HÀNG
      </Text>

      <Text style={styles.line}>
        ==============================
      </Text>

      <Text style={styles.thanks}>
        XIN CẢM ƠN QUÝ KHÁCH!
      </Text>

      <Text style={styles.copyright}>
        © 2026 -  GIÓ COFFEE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    marginBottom: 20,
  },

  line: {
    fontSize: 16,
    color: '#555555',
    marginVertical: 5,
  },

  thanks: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#795548',
    marginTop: 10,
  },

  copyright: {
    fontSize: 14,
    color: '#777777',
    marginTop: 10,
  },
});
