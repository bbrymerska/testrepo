import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const LogInView = props => {
return(<View style={styles.screen}>
    <Text>The LogIn!</Text>
    <Button title="Take Picture! nie ma odwrotu" onPress={() => {
        props.navigation.navigate('TakePhoto');
    }} />

    <Button title="Zobacz kategorie!" onPress={() => {
            props.navigation.navigate('CategoryListView');
        }} />
    </View>
    )
};

LogInView.navigationOptions ={
    headerTitle: 'Log In!'
   
}; 


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LogInView;