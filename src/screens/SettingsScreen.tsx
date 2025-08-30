import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeRole } from "../store/actions/DataActions";

const SettingsScreen = () => {
  const totalLikes = useSelector((state: RootState) => state.dataReducer.totalLikes);
  const userName = useSelector((state: RootState) => state.dataReducer.userName);
  const userRole = useSelector((state: RootState) => state.settings.userRole);
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Text style={styles.text}>Total Likes: {totalLikes}</Text>
      <Text style={styles.text}>User Name: {userName}</Text>
      <Button title="Change Role" onPress={() => dispatch(changeRole("Sameen the smartu"))}/>
      <Text style={styles.text}>User Role: {userRole}</Text>
    </View>
  );
};

export default SettingsScreen;

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
