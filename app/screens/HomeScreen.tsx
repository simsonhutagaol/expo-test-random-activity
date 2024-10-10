import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppStyles from "../styles/AppStyles";
import { Data } from "../interfaces/types";
import ActivityDisplay from "../components/ActivityDisplay";
import SavedActivityList from "../components/SavedActivityList";
import SpecifiedView from "../components/SpecifiedView";
import { DATA_URL, ERROR_MESSAGE } from "../constants";
import {
  Text,
  Pressable,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [savedData, setSavedData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
    loadSavedData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(DATA_URL);
      const jsonData = await response.json();
      const randomIndex = Math.floor(Math.random() * jsonData.length);
      setData(jsonData[randomIndex]);
    } catch (error) {
      console.error(error);
      Alert.alert("‼️", ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

  const loadSavedData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("savedData");
      if (storedData) {
        setSavedData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    if (data) {
      setSaving(true);
      const isDuplicate = savedData.some((item) => item.key === data.key);
      if (isDuplicate) {
        Alert.alert(
          "Duplicate Activity",
          "This activity has already been saved!",
          [{ text: "OK", style: "cancel" }]
        );
        setSaving(false);
        return;
      }

      const updatedSavedData = [data, ...savedData];
      setSavedData(updatedSavedData);
      await AsyncStorage.setItem("savedData", JSON.stringify(updatedSavedData));
      setSaving(false);
    }
  };

  const handleDelete = (itemToDelete: Data) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this activity?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: async () => {
            const updatedSavedData = savedData.filter(
              (item) => item.key !== itemToDelete.key
            );
            setSavedData(updatedSavedData);
            await AsyncStorage.setItem(
              "savedData",
              JSON.stringify(updatedSavedData)
            );
          },
        },
      ]
    );
  };

  return (
    <SpecifiedView style={AppStyles.container}>
      <Text style={AppStyles.title}>Random Activity</Text>
      <Pressable
        style={AppStyles.button}
        onPress={fetchData}
        disabled={loading}
        accessible={true}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text>Refresh</Text>
        )}
      </Pressable>
      <ActivityDisplay data={data} onSave={handleSave} saving={saving} />
      <Text style={AppStyles.savedDataTitle}>Saved Data:</Text>
      <ScrollView style={AppStyles.savedDataContainer}>
        <SavedActivityList savedData={savedData} onDelete={handleDelete} />
      </ScrollView>
    </SpecifiedView>
  );
};

export default HomeScreen;
