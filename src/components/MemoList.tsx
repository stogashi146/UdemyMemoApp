import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native"; //
import { useNavigation } from "@react-navigation/native";

import Icon from "./Icon";
import { dateToString } from "../utils";

export default function MemoList(props: any) {
  const { memos } = props;
  // navigationのPropsを受け取れなくても使用可能にする
  const navigation: any = useNavigation();

  function renderItem({ item }: any) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail", { id: item.id });
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>
            {item.bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>
            {dateToString(item.updatedAt)}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert("Are you sure?")}>
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
  memoDelete: {
    padding: 8,
  },
});
