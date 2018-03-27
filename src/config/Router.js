import React, { Component } from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import HomeView from '../screen/Home/HomeView';
import HomeDetailView from '../screen/Home/HomeDetailView';
import UpdateView from '../screen/Update/UpdateView';
import UpdateDetailView from '../screen/Update/UpdateViewDetail';
import FavoriteView from '../screen/FavoriteView/FavoriteView';
import MyHomeView from '../screen/MyHome/MyHomeView';
import MoreView from '../screen/More/MoreView';
import {Image} from 'react-native'

const HomeStack = StackNavigator({
    StackHome: { screen: HomeView },
    StackHomeDetail: { screen: HomeDetailView },
});
  
const UpdateStack = StackNavigator({
    StackUpdate: { screen: UpdateView },
    StackUpdateDetail: { screen: UpdateDetailView },
});
  
export const Router = TabNavigator (
    {
      Home: { screen: HomeStack },
      Update: { screen: UpdateStack },
      Favorite: {screen: FavoriteView},
      MyHome: {screen: MyHomeView},
      More: {screen : MoreView},
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconPath;
              let fc = focused;
              if (routeName === 'Home') {
                iconPath = require('../image/tab0.png');
              } else if (routeName === 'Update') {
                iconPath = require('../image/tab1.png');
              } else if (routeName === 'Favorite') {
                iconPath = require('../image/tab2.png');
              } else if (routeName === 'MyHome') {
                iconPath = require('../image/tab3.png');
              } else if (routeName === 'More') {
                iconPath = require('../image/tab4.png');
              }
              return <Image source={iconPath} style={{ width: 25, height: 25 }} />;
            },
            
          }),
        tabBarOptions: {
          activeTintColor: 'red',
          inactiveTintColor: 'black',
          // activeBackgroundColor: 'gray',
          // inactiveBackgroundColor : 'tomato',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        
      }
    
);