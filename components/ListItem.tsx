import { View, Text, StyleSheet } from "react-native";

export function ListItem(props) {
   let touchY
  return (
    <View style={styles.item}>
      <View style={styles.task}
      onTouchStart={e=> touchY = e.nativeEvent.pageX}
      onTouchEnd={e => {
        if ( e.nativeEvent.pageX-touchY > 20)
          props.func()
      }}
      >
        <Text>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    marginHorizontal: 10,

  },
  task:{
    alignItems: "center",
    marginVertical: 2,
    backgroundColor: "grey",
    width: "100%",
    padding:5
  }
});
