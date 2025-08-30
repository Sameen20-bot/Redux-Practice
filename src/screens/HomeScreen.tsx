import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseTotalLikes } from "../store/actions/DataActions";

const HomeScreen = () => {
  const totalLikes = useSelector((state) => state.totalLikes);
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Total Likes: {totalLikes}</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
      <Button title="+" onPress={() => dispatch(IncreaseTotalLikes())}/>
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
