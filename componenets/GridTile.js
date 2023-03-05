import { Pressable, View ,Text, Image } from "react-native";


function GridTile({img, name, yod}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={img} />
                </View>

            </Pressable>
        </View>
    )

}

export default GridTile;