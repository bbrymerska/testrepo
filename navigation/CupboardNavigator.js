import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import LogInView from '../screens/LogInView';
import PhotosGrid from '../screens/PhotosGrid';
import SignUp from '../screens/SignUp';
import SinglePhoto from '../screens/SinglePhoto';
import StartPage from '../screens/StartPage';
import ApprovePicture from '../screens/ApprovePicture';
import CategoryListView from '../screens/CategoryListView';
import PicturePreviewStage from '../screens/EditPicture';
import TakePhoto from '../screens/TakePhoto';
import Colors from '../constants/Colors';
import EditPicture from '../screens/EditPicture';



const CupboardNavigation = createStackNavigator({
    StartPage: StartPage,
    ApprovePicture: ApprovePicture,
    CategoryListView: CategoryListView,
    LogInView: LogInView,
    TakePhoto: TakePhoto,
    PhotosGrid: PhotosGrid,
    EditPicture:EditPicture,
    SignUp: SignUp,
    SinglePhoto: SinglePhoto,
      
},{
    // initialRouteName: 'CategoryListView',

    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS==='android' ? Color.primaryColor : ''
        },
    
        headerTintColor: Platform.OS==='android' ? 'white' : Colors.primaryColor
    }
}
);

export default createAppContainer(CupboardNavigation);