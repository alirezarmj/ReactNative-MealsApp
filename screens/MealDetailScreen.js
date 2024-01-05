import { Text, View } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Details of {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
