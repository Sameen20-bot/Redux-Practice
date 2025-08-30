import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseTotalLikes, IncreaseTotalLikesByAmount } from "../store/actions/DataActions";
import { RootState } from "../store/store";

const HomeScreen = () => {
  const totalLikes = useSelector((state: RootState) => state.dataReducer.totalLikes);
  const userName = useSelector((state: RootState) => state.dataReducer.userName);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Total Likes: {totalLikes}</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
      <Button title="+" onPress={() => dispatch(IncreaseTotalLikes())}/>
      <Button title="By Amount" onPress={() => dispatch(IncreaseTotalLikesByAmount(50))}/>
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
