import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { IMAGES } from '../data/image-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderIcon from '../components/HeaderIcon';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import * as photosActions from '../store/actions/photo';
import PhotosGrid from './PhotosGrid';

const SinglePhoto = props => {
    const photoId = props.navigation.getParam('photoId');
    const categoryId = props.navigation.getParam('categoryId');
    const categoryTitle = props.navigation.getParam('categoryTitle');
    const availablePhotos = useSelector(state => state.photos.userPhotos);
    const selectedPhoto = availablePhotos.find(photo => photo.id === photoId);
    
    
    const dispatch = useDispatch();

    // useEffect(() => {
    //     props.navigation.setParams({photoId: selectedPhoto.id})
    // }, [selectedPhoto]);


    if (!selectedPhoto) {
        return <View style={styles.textContainer}>
            <Text style={styles.text}>Zdjecie usuniete w danej kategorii!</Text>
        </View>
    }

   


    return (
        <View style={styles.screen}>
        
            <Text>The SinglePhoto! {selectedPhoto.id}</Text>
            <Image source={{ uri: selectedPhoto.imageURL }} style={styles.photoImage} />
            <View style={styles.buttonContainer}>
                <Button color={Colors.primaryColor} title="Add to categories" onPress ={
                   () => {
                       props.navigation.navigate({
                           routeName: 'EditPicture',
                           params: {
                               photoId: photoId,
                               categoryId: categoryId,
                               categoryTitle: categoryTitle
                           }
                       })
                   }
               }  />
                <Button color={Colors.secondaryColor} title="Delete from category" onPress={() => {
        
                    dispatch(photosActions.deletePhoto(photoId))
                    
                 }} />
            </View>

        </View>
    )


};



SinglePhoto.navigationOptions = (navData) => {
    const photoId = navData.navigation.getParam('photoId');

   

    // const selectedPhoto = IMAGES.find(photo => photo.id === photoId);

    return {
        headerTitle: 'Your Photo',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
            <Item title='Best Photo' iconName='heart'/>

        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },

    textContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    text:{
        fontSize: 25,
        color: Colors.primaryColor,
        padding:10
    },

    photoImage:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        width: '100%'
    }
});

export default SinglePhoto;