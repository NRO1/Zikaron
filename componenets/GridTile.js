import { Pressable, View ,Text, Image, StyleSheet } from "react-native";


function GridTile({ name, yod, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button} android_ripple={{color: '#ccc'}} onPress={onPress}>
            <View style={styles.inner}>
                <Image source={require('../assets/images/37.jpg')} style={styles.img}/>
                    <Text>{name}</Text>
                    <Text>{yod}</Text>

            </View>
                    

            </Pressable>
        </View>
    )
}

export default GridTile;

const styles = StyleSheet.create({
    gridItem :{
        flex :1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white"
    },
    button : {
        flex: 1
    },
    inner :{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 80,
        height: 80
    }

})