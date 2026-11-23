
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        MENU ĐỒ UỐNG
      </Text>

      <View style={styles.menu}>
        <Text style={styles.item}>
          Cà phê đen - 20.000đ
        </Text>

        <Text style={styles.item}>
          Cà phê sữa - 25.000đ
        </Text>

        <Text style={styles.item}>
          Bạc xỉu - 30.000đ
        </Text>

        <Text style={styles.item}>
          Trà đào - 30.000đ
        </Text>
      </View>
   
<Text style={styles.item}>
  Matcha Latte - 35.000đ
</Text>



      <Text style={styles.line}>
        ==============================
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingVertical: 10,
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#795548',
    marginBottom: 15,
  },

  menu: {
    paddingVertical: 5,
  },

  item: {
    fontSize: 17,
    color: '#333333',
    marginVertical: 5,
  },

  line: {
    color: '#555555',
    marginTop: 15,
    fontSize: 14,
  },
});
