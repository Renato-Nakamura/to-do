import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {

  const [task, setTask] = useState("");
  const [taskList,setTaskList] =useState([{key:"teste"}])
  // let taskList = [{key:"teste"}]
  const newTask = () => {
    setTaskList(oldList => [...oldList,{key:task}])
    setTask("")
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <View style={styles.list}>
        {/* <Text>{task}</Text> */}
        <FlatList
        data={taskList}
        renderItem={({item}) => <Text>{item.key}</Text>}
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
  list:{
    height:200,
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
