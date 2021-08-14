import React from 'react';
import {View, Text, StyleSheet, Platform, FlatList,ImageBackground, TouchableOpacity} from 'react-native';
import { CATEGORIES} from '../data/category-data';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';


const PhotosGrid = props => {

    const availablePhotos = useSelector(state => state.photos.userPhotos);

   const categoryID = props.navigation.getParam('categoryId');
   const categoryTitle = props.navigation.getParam('categoryTitle');


   const renderCategoryImagesItem = itemData => {


       return(
           <View style={styles.screen}>
               <TouchableOpacity onPress ={
                   () => {
                       props.navigation.navigate({
                           routeName: 'SinglePhoto',
                           params: {
                               photoId: itemData.item.id,
                               categoryId: categoryID,
                               categoryTitle: categoryTitle
                           }
                       })
                   }
               } >
            <View>
               <ImageBackground source={{uri: itemData.item.imageURL}} style={styles.photoImage}/>
               <Text>{itemData.item.id}</Text>
           </View>
           </TouchableOpacity>
           </View>
           
           
       )
   }

//    const choosenCategory = CATEGORIES.find(category => category.id === categoryID)

const displayedCategoryImages = availablePhotos.filter(
    photo => photo.categoryId.indexOf(categoryID) >= 0
);


if(displayedCategoryImages.length === 0){
    return <View style={styles.textContainer}>
        <Text style={styles.textInfo}>Nie masz jeszcze zadnego zdjecia!</Text>
    </View>
}


return(
    <FlatList data={displayedCategoryImages} keyExtractor={(item, index) => item.id} renderItem={renderCategoryImagesItem} numColumns={2} />
    );
};





PhotosGrid.navigationOptions = navData => {
    const categoryID = navData.navigation.getParam('categoryId');
    const choosenCategory = CATEGORIES.find(category => category.id === categoryID);

    return{
        headerTitle: choosenCategory.title,
        
    };
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
    },

    textContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
       
    },
    
    textInfo: {
        fontSize: 25,
        color: Colors.primaryColor
    },


    photoImage:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 250
    }
});

export default PhotosGrid;