import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const StartPage = props => {
return(<View style={styles.screen}>
    <Text>The StartPage!</Text>

    <Button title="Log In" onPress={() => {
        props.navigation.navigate({routeName: 'LogInView'})
    }} />

<Button title="Sign Up" onPress={() => {
        props.navigation.navigate({routeName: 'SignUp'})
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

export default StartPage;