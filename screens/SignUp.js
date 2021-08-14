import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const SignUp = props => {
return(<View style={styles.screen}>
    <Text>The SignUp!</Text>
    <Button title="Take Picture!" onPress={() => {
        props.navigation.replace('TakePhoto')
    }} />

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

export default SignUp;