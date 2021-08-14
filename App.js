import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import CupboardNavigator from './navigation/CupboardNavigator';
import photosReducer from './store/reducers/photo';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';


const rootReducer = combineReducers({
  photos: photosReducer
});

const store = createStore(rootReducer);

const loadingFonts = () => {
  return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return(<AppLoading startAsync={loadingFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)}/>) 
  };

  
  return (
    <Provider store={store}>
      <CupboardNavigator/>
    </Provider>
    
  );
}


const styles = StyleSheet.create({
  screen: {
    fontFamily: 'open-sans-bold',
    padding: 30
  }
});

