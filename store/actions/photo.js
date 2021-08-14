export const DELETE_PHOTO ='DELETE_PHOTO';
export const SET_CATEGORY = 'SET_CATEGORY';

export const deletePhoto = photoId => {
    return{type: DELETE_PHOTO, pid: photoId};
};


export const setCategories = (filterCategories, photoId) => {
    return {type: SET_CATEGORY, filters: filterCategories, pid: photoId} 
};