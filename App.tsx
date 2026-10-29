import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Тауарлардың типін анықтау
interface CoffeeItem {
  id: string;
  name: string;
  subTitle: string;
  price: string;
  rating: number;
  image: string;
}

// Деректер тізімі
const COFFEE_DATA: CoffeeItem[] = [
  {
    id: '1',
    name: 'Cappuccino Chocolate',
    subTitle: 'Шоколад қосылған',
    price: '1 500 ₸',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Cappuccino Oat Milk',
    subTitle: 'Сұлы сүтімен',
    price: '1 800 ₸',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Caffe Mocha',
    subTitle: 'Эспрессо & Шоколад',
    price: '1 600 ₸',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Caramel Macchiato',
    subTitle: 'Карамель шәрбатымен',
    price: '1 700 ₸',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&auto=format&fit=crop&q=80',
  },
];

const CATEGORIES = ['Cappuccino', 'Machiato', 'Latte', 'Americano'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Cappuccino');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0C0F14" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header (Жоғарғы бөлік) */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationTitle}>Орналасқан жері</Text>
            <Text style={styles.locationText}>Алматы, Қазақстан 📍</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' }}
            style={styles.avatar}
          />
        </View>

        {/* Search Box (Іздеу) */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Кофе іздеу..."
            placeholderTextColor="#52555A"
          />