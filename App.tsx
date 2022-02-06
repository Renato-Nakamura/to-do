import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { Header } from "./components/Header";
import { useState } from "react";
import { ListItem } from "./components/ListItem";

export default function App() {
  type Task = {
    key: number;
    task: String;
    done: Boolean;
  };

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  // let taskList = [{key:"teste"}]
  const newTask = () => {
    let tasked: Task = {
      task: task,
      done: false,
      key: taskList.length,
    };
    setTaskList((oldList) => [...oldList, tasked]);
    setTask("");
  };
  const onSwipe = (item) => {
    console.log("foii", item);
    setTaskList((oldList) => oldList.filter((a) => a != item));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <View style={styles.list}>
        {/* <Text>{task}</Text> */}
        <FlatList
          data={taskList}
          renderItem={({ item }) => (
            <ListItem func={() => onSwipe(item)} text={item.task}></ListItem>
          )}
        />
      </View>
      <View style={styles.insertField}>
        <View>
          <TextInput
            defaultValue={task}
            onChangeText={(text) => setTask(text)}
            style={styles.input}
          />
        </View>
        <Button title="Teste" onPress={newTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    height: 200,
    width: "100%",
    display: "flex",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  insertField: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    height: 40,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 2,
    width: 200,
    height: "100%",
    alignItems: "center",
    paddingLeft: 10,
  },
});
