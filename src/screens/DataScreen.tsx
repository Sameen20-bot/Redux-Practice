import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const DataScreen = () => {
  const totalLikes = useSelector((state) => state.totalLikes);
  const userName = useSelector((state) => state.userName);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Data Screen</Text>
      <Text style={styles.text}>Total Likes: {totalLikes}</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
    </View>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
