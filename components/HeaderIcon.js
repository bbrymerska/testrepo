import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';



const HeaderIcon = props => {
    return(
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} 
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor} 
    
    />

    );
};

export default HeaderIcon;