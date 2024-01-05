import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemdata) {
    function handlePress() {
      navigation.navigate("MealsOverview", { categoryId: itemdata.item.id });
    }
    return (
      <CategoryGridTile
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={handlePress}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
