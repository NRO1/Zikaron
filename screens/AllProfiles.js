import { FlatList } from "react-native";
import { Profiles } from "../data/dummy-data";

function renderItem() {
    return ;
}

function AllProfiles() {
    return <FlatList data={Profiles} keyExtractor={(item) => item.id} renderItem={renderItem} />

}

export default AllProfiles;