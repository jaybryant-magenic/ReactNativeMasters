import React, { Component } from 'react';
import {
    Image,
    Text,
} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Categories from '../screens/Categories';
import Profile from '../screens/Profile';

export const PortalTab = createBottomTabNavigator(
    {
        Categories: Categories,
        Profile: Profile,
    },
    {
        navigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, tintColor}) => {
              const { routeName } = navigation.state;
              let source;
              if (routeName === 'Categories') {
                source = focused ? require("../assets/icons/home.png") : require("../assets/icons/home-outlined.png");
              }   

              if (routeName === 'Profile') {
                source = focused ? require("../assets/icons/profile.png") : require("../assets/icons/profile-outlined.png");
              }

              return (
                <Image 
                    style={{width: 30, height: 30}}
                    tintColor={tintColor}
                    source={source} />
              );
          }
        }),
    }  
  );