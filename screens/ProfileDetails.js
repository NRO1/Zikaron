import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { Profiles } from '../data/dummy-data';


function ProfileDetails({ route }) {
    const profileId = route.params.proflieId;
    
    const prof = Profiles.filter(el => el.id === profileId)

    function playClip() {
        console.log('playng sound')}

    return (
        <View style={styles.constainer}>
            <Text style={styles.headline}>{prof[0].name}</Text>
            <Image source={require('../assets/images/37.jpg')}/>
            <Text style={styles.headline}>{prof[0].desc}</Text>
            <Pressable onPress={playClip}><Text>play sound</Text></Pressable>
           <Text></Text>
        </View>
    )

}

export default ProfileDetails;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 16,
    },
    headline: {
        margin: 16,
        fontSize: 20,
    }
})