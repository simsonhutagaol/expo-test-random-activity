import { StyleSheet } from "react-native";
const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3F51B5",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#FFAB91",
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  activityContainer: {
    padding: 12,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  activityText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#4A148C",
  },
  activityType: {
    fontSize: 14,
    color: "gray",
  },
  savedDataContainer: {
    padding: 12,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 20,
  },
  savedDataTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3F51B5",
  },
  itemContainer: {
    backgroundColor: "#E3F2FD",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  deleteText: {
    fontSize: 16,
    color: "red",
  },
  emptyStateMessage: {
    color: "gray",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#880E4F",
    fontStyle: "italic",
  },
});

export default AppStyles;
