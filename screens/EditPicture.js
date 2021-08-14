import React, {useState,useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderIcon from '../components/HeaderIcon';
import { setCategories } from '../store/actions/photo';




const EditPicture = props => {
    const {navigation} = props;

    const photoId = props.navigation.getParam('photoId');
    const categoryId = props.navigation.getParam('categoryId');
    const availablePhotos = useSelector(state => state.photos.userPhotos);
    const selectedPhoto = availablePhotos.find(photo => photo.id === photoId);
    const categoryTitle = props.navigation.getParam('categoryTitle');

    const[isBlousess, setIsBlousess] = useState(categoryTitle==='Blouses' ? true : false)
    const[isPants, setIsPants] = useState(categoryTitle==='Pants'? true : false)
    const[isDressess, setIsDressess] = useState(categoryTitle==='Dressess' ? true : false)
    const[isTshirt, setIsTshirt] = useState(categoryTitle==='T-shirts'? true : false)
    const[isShoes, setIsShoes] = useState(categoryTitle==='Shoes' ? true : false)
    const[isJackets, setIsJackets] = useState(categoryTitle==='Jackets' ? true : false)

    const dispatch = useDispatch();

    
    if (!photoId) {
        return <View style={styles.textContainer}>
            <Text style={styles.text}>Zdjecie usuniete w danej kategorii!</Text>
        </View>
    }

    const saveCategories = useCallback(() => {
        const savedFilters = {
            blouses: isBlousess,
            pants: isPants,
            dressess: isDressess,
            thirt: isTshirt,
            shoes: isShoes,
            jackets: isJackets
        };

        // console.log(savedFilters);
        dispatch(setCategories(savedFilters,photoId));

    },[isBlousess, isPants, isDressess, isTshirt, isShoes, isJackets, dispatch]);

    useEffect(() => {
        props.navigation.setParams({save: saveCategories})
    }, [saveCategories]);

    const CategorySwitch = props =>{
        return(
            <View style={styles.switchContainer}>
        <Text>{props.label}</Text>
        <Switch 
        trackColor={{true: Colors.primaryColor}}
        value={props.state}
        onValueChange={props.onChange}
        />
        </View>
        );
    };

    return (<View style={styles.screen}>
        <Text>Edit Picture!</Text>
        <Image source={{ uri: selectedPhoto.imageURL }} style={styles.photoImage} />
        <CategorySwitch label='Blouses' state={isBlousess} onChange={newValue => setIsBlousess(newValue)} />
        <CategorySwitch label='Pants' state={isPants} onChange={newValue => setIsPants(newValue)} />
        <CategorySwitch label='Dressess' state={isDressess} onChange={newValue => setIsDressess(newValue)} />
        <CategorySwitch label='T-shirts' state={isTshirt} onChange={newValue => setIsTshirt(newValue)} />
        <CategorySwitch label='Shoes' state={isShoes} onChange={newValue => setIsShoes(newValue)} />
        <CategorySwitch label='Jackets' state={isJackets} onChange={newValue => setIsJackets(newValue)} />

        

    </View>
    )
};


EditPicture.navigationOptions = navData => {
    return{
        headerTitle: 'Add Category',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
            <Item title='Save' iconName='save-sharp'
                onPress= {
                    navData.navigation.getParam('save')
                 }
            />
        </HeaderButtons>
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    switchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 5

    },

    photoImage:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '60%'
    }
});

export default EditPicture;