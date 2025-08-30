import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const totalLikes = useSelector((state) => state.totalLikes);
  const userName = useSelector((state) => state.userName);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Total Likes: {totalLikes}</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
      {/* <Button title="+" onPress={() => setTotalLikes(totalLikes + 1)}/> */}
    </View>
  );
};

export default HomeScreen;

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
