import React from "react";
import { Text, Pressable, ActivityIndicator } from "react-native";
import AppStyles from "../styles/AppStyles";
import { ActivityDisplayProps } from "../interfaces/types";
import SpecifiedView from "./SpecifiedView";

const ActivityDisplay: React.FC<ActivityDisplayProps> = ({
  data,
  onSave,
  saving,
}) => {
  if (!data) return null;

  return (
    <SpecifiedView style={AppStyles.activityContainer}>
      <Text style={AppStyles.activityText}>{data.activity}</Text>
      <Text style={AppStyles.activityType}>({data.type})</Text>
      <Pressable style={AppStyles.button} onPress={onSave} disabled={saving}>
        {saving ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text>Save</Text>
        )}
      </Pressable>
    </SpecifiedView>
  );
};

export default ActivityDisplay;
