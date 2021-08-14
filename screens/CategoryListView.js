import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import { CATEGORIES } from '../data/category-data';
import Colors from '../constants/Colors';





const CategoryListView = props => {
    const renderCategoryItem = (CategoriesData) => {
        let TouchableComponent = TouchableOpacity;

        if(Platform.OS === 'android' && Platform.Version >= 22){
            TouchableComponent = TouchableNativeFeedback
        };

        return(
        <View style={styles.categoryItem}>
            <TouchableComponent 
            style={{flex:1}}
            onPress={() => {
                props.navigation.navigate({routeName: 'PhotosGrid', params: {
                    categoryId: CategoriesData.item.id,
                    categoryTitle: CategoriesData.item.title
                }});
            }}>
            <View style={{...styles.categoryContainer,...{backgroundColor: CategoriesData.item.color}}} >
            <Text style={styles.title} numberOfLines={2}>{CategoriesData.item.title}</Text>
            </View>

            </TouchableComponent>
        </View>

        ); 
    };


 CategoryListView.navigationOptions ={
    headerTitle: 'Category'
   
};  

return(
    <FlatList data={CATEGORIES} renderItem={renderCategoryItem} numColumns={2}/>
)
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoryItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS ==='android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 4,
    },

    categoryContainer:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.28,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryListView;