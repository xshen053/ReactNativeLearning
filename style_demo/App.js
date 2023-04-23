import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src_29_project';

// import Index from './src_01_StyleSheet';
// import Index from './src_02_Flexbox/FlexDirection';
// import Index from './src_02_Flexbox/JustifyContent';
// import Index from './src_02_Flexbox/Alignitems';
// import Index from './src_03_Dimensions/index';
// import Index from './src_04_Alert_Button';
// import Index from './src_05_Switch_StatusBar';
// import Index from './src_06_ActivityIndicator';
// import Index from './src_07_Image';
// import Index from './src_08_TextInput';
// import Index from './src_10_ScrollView';
// import Index from './src_11_SectionList/index2';
// import Index from './src_17_AsyncStorage';
// import Index from './src_21_Loading';
// import Index from './src_22_StackNavigator';
// import Index from './src_23_BottomTab';
// import Index from './src_27_PassingParameter';
// import Index from './src_28_API';
import Index from './src_29_project_revised';
// import Index from './src_29_project';
// import Index from './src_18_Geolocation';
// import Index from './src_30_TodoList';
// import Index from './src_31_PrescriptionList/index2';
export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <NavigationContainer>
          <Index />
        </NavigationContainer>
      </StoreProvider>
    );
  }
}
