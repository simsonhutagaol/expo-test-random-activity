import React from "react";
import { Text, Pressable, View } from "react-native";
import AppStyles from "../styles/AppStyles";
import { SavedActivityListProps } from "../interfaces/types";

const SavedActivityList: React.FC<SavedActivityListProps> = ({
  savedData,
  onDelete,
}) => {
  if (savedData.length === 0)
    return (
      <Text style={AppStyles.emptyStateMessage}>
        Your saved activities list is empty!
      </Text>
    );

  return (
    <>
      {savedData.map((item) => (
        <View key={item.key} style={AppStyles.itemContainer}>
          <Text style={AppStyles.itemText}>{item.activity}</Text>
          <Pressable
            style={AppStyles.deleteButton}
            onPress={() => onDelete(item)}
          >
            <Text style={AppStyles.deleteText}>🅇</Text>
          </Pressable>
        </View>
      ))}
    </>
  );
};

export default SavedActivityList;
