import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const TakePhoto = props => {
return(<View style={styles.screen}>
    <Text>Take Photo!</Text>
</View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TakePhoto;