import React from "react";
import { List } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  const navigate = (route) => navigation.navigate(route);
  return (
    <ScrollView styles={{ flex: 1 }}>
      <List.Accordion
        title="Bottom Tab Navigation"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item title="Animatable Tab2" onPress={() => navigate("Tab2")} />
      </List.Accordion>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
