import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  const categories = [
    { id: "1", name: "Sofas", icon: "sofa" },
    { id: "2", name: "Tv Unit", icon: "television" },
    { id: "3", name: "Chair", icon: "seat" },
    { id: "4", name: "Beds", icon: "bed-king-outline" },
    { id: "5", name: "Table", icon: "table-furniture" },
  ];

  const newArrivals = [
    {
      id: "1",
      name: "Two seater sofa bed",
      price: "$180",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    },
    {
      id: "2",
      name: "Plastic coffee chair",
      price: "$123",
      rating: 4.4,
      image:
        "https://plus.unsplash.com/premium_photo-1750591630547-42b2a69e7614?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "Wooden dining table",
      price: "$250",
      rating: 4.4,
      image:
        "https://plus.unsplash.com/premium_photo-1704686580626-d53ce68985d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      name: "Comfy arm chair",
      price: "$199",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    },
    {
      id: "5",
      name: "Modern bedside table",
      price: "$140",
      rating: 4.1,
      image:
        "https://plus.unsplash.com/premium_photo-1682259447022-379e6ea7c1aa?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => showAlert("Menu", "Menu icon pressed")}
            activeOpacity={0.7}
          >
            <Ionicons name="menu-outline" size={26} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logoContainer}
            onPress={() => showAlert("Logo", "Furnikraft Logo Pressed")}
            activeOpacity={0.7}
          >
            <Ionicons name="cube-outline" size={24} color="#E67E22" />
            <Text style={styles.logoText}>
              Furni<Text style={styles.logoAccent}>kraft</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => showAlert("Search", "Search icon pressed")}
              style={styles.icon}
              activeOpacity={0.7}
            >
              <Ionicons name="search-outline" size={22} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => showAlert("Cart", "Cart icon pressed")}
              activeOpacity={0.7}
            >
              <Ionicons name="cart-outline" size={22} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => showAlert("Offer", "25% discount banner pressed")}
          style={styles.heroContainer}
          activeOpacity={0.8}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>
              Perfect <Text style={styles.heroHighlight}>Furniture</Text>
            </Text>
            <Text style={styles.heroSubtitle}>For your dream home</Text>
            <Text style={styles.heroOffer}>UPTO 25% OFF</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Categories</Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => showAlert("Category", `${item.name} selected`)}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={28}
                  color="#3A4D39"
                />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Arrivals</Text>
            <TouchableOpacity
              onPress={() => showAlert("View All", "Showing all products...")}
              activeOpacity={0.7}
            >
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.newArrivalsContainer}>
            {newArrivals.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() =>
                  showAlert(item.name, `Price: ${item.price}`)
                }
                activeOpacity={0.8}
              >
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.rating}>⭐ {item.rating}</Text>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() =>
                      showAlert("Added to Cart", `${item.name} added to cart.`)
                    }
                    activeOpacity={0.8}
                  >
                    <Ionicons name="add" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginLeft: 6,
  },
  logoAccent: { color: "#E67E22" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  icon: { marginRight: 12 },
  heroContainer: { position: "relative", marginVertical: 15 },
  heroImage: {
    width: "90%",
    alignSelf: "center",
    height: 180,
    borderRadius: 20,
  },
  heroTextContainer: { position: "absolute", top: 30, left: 40 },
  heroTitle: { fontSize: 22, fontWeight: "700", color: "#ffffff" },
  heroHighlight: { color: "#E67E22" },
  heroSubtitle: { color: "#F5F5F5", fontSize: 15, marginTop: 4 },
  heroOffer: {
    backgroundColor: "#E67E22",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
    fontWeight: "600",
    fontSize: 12,
    alignSelf: "flex-start",
  },
  section: { marginTop: 10, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", color: "#333" },
  categoryItem: { alignItems: "center", marginRight: 22, marginTop: 10 },
  categoryName: { marginTop: 5, color: "#555", fontSize: 13 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  viewAll: { color: "#E67E22", fontWeight: "600" },
  newArrivalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: { width: "100%", height: 100, borderRadius: 10 },
  cardTitle: { fontSize: 13, fontWeight: "600", color: "#333", marginTop: 6 },
  cardPrice: { fontSize: 12, color: "#666", marginBottom: 4 },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: { fontSize: 12, color: "#444" },
  addBtn: { backgroundColor: "#3A4D39", borderRadius: 20, padding: 5 },
});
