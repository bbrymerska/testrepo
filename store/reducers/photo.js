import { State } from "react-native-gesture-handler";
import { IMAGES } from "../../data/image-data";
import { DELETE_PHOTO, SET_CATEGORY } from "../actions/photo";
import Image from "../../models/image";

const initialState = {
    photos: IMAGES,
    userPhotos: IMAGES,

}

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PHOTO:
            return {
                ...state,
                userPhotos: state.userPhotos.filter(photo => photo.id !== action.pid)
            };
        case SET_CATEGORY:
            const appliedCategories = action.filters;
            const updatedPhotos = state.userPhotos
            // const filteredPhotos = state.photos.map(photo => {
            //     if(appliedCategories.pants && photo.categoryId !== 'c1' ){
            //         const newImage = new Image(
            //             new Date().toString(),
            //             'c2',
            //             photo.imageURL,
            //             photo.imageColor
            //         );

            //         updatedPhotos.push(newImage)
            //     }
            // console.log(updatedPhotos)
            console.log(action.filters)
            console.log(action.pid)

            state.userPhotos.map(photo => {
                if (appliedCategories.pants && photo.categoryId !== 'c2' && (photo.id === action.pid)) {

                    const newImage = new Image(
                        new Date().toString(),
                        'c2',
                        photo.imageURL,
                        photo.imageColor
                    );

                    updatedPhotos.push(newImage)
                };

                if (appliedCategories.blouses && photo.categoryId !== 'c1' && (photo.id === action.pid)) {

                    const newImage = new Image(
                        new Date().toString(),
                        'c1',
                        photo.imageURL,
                        photo.imageColor
                    );

                    updatedPhotos.push(newImage)
                };

                if (appliedCategories.dressess && photo.categoryId !== 'c3' && (photo.id === action.pid)) {

                    const newImage = new Image(
                        new Date().toString(),
                        'c3',
                        photo.imageURL,
                        photo.imageColor
                    );

                    updatedPhotos.push(newImage)
                };

                
                if (appliedCategories.jackets && photo.categoryId !== 'c6' && (photo.id === action.pid)) {

                    const newImage = new Image(
                        new Date().toString(),
                        'c6',
                        photo.imageURL,
                        photo.imageColor
                    );

                    updatedPhotos.push(newImage)
                };

                if (appliedCategories.shoes && photo.categoryId !== 'c5' && (photo.id === action.pid)) {

                    const newImage = new Image(
                        new Date().toString(),
                        'c5',
                        photo.imageURL,
                        photo.imageColor
                    );

                    updatedPhotos.push(newImage)
                };

                if (appliedCategories.thirt && photo.categoryId !== 'c4' && (photo.id === action.pid)) {

                    const newImage = new Image(
                        new Date().toString(),
                        'c4',
                        photo.imageURL,
                        photo.imageColor
                    );

                    updatedPhotos.push(newImage)
                };

                

            })


            return { ...state, userPhotos: updatedPhotos }

    }
    return state;
};

export default photosReducer;