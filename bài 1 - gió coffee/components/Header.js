
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.line}>
        ==============================
      </Text>

      <Text style={styles.title}>
        GIÓ COFFEE
      </Text>

      <Text style={styles.subtitle}>
        Ứng dụng quản lý quán cà phê
      </Text>

      <Text style={styles.line}>
        ==============================
      </Text>

      <Text style={styles.section}>
        ----- THÔNG TIN QUÁN -----
      </Text>

      <Text style={styles.info}>Tên quán: GIÓ COFFEE </Text>
      <Text style={styles.info}>Địa chỉ: Nha Trang, Khánh Hòa</Text>
      <Text style={styles.info}>Số điện thoại: 0948593380</Text>
      <Text style={styles.info}>Giờ mở cửa: 06:00 - 22:00</Text>
      <Text style={styles.info}>Wi-Fi:  GIOCOFFEE</Text>
      <Text style={styles.info}>Mật khẩu: Hỏi nhân viên</Text>

      <Text style={styles.line}>
        ------------------------------
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
  },

  line: {
    color: '#555555',
    fontSize: 14,
    marginVertical: 5,
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#795548',
    marginVertical: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 8,
  },

  section: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#795548',
  },

  info: {
    fontSize: 16,
    color: '#333333',
    marginVertical: 3,
  },
});
