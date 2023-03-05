import { FlatList } from "react-native";
import { Profiles } from "../data/dummy-data";
import GridTile from "../componenets/GridTile";

function AllProfiles({ navigation }) {
  function renderItem(itemData) {
    function pressHandler() {
      navigation.navigate('ProfileDetails', {
        proflieId: itemData.item.id
      })
    }
  
    return (
      <GridTile
        img={itemData.item.img}
        name={itemData.item.name}
        yod={itemData.item.yod}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={Profiles}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

export default AllProfiles;
