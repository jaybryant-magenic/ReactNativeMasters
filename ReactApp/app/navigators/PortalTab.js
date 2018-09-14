import React from 'react';
import {
    Image,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Categories from '../screens/Categories';
import News from '../screens/News';

const PortalTab = createBottomTabNavigator(
    {
        Categories: Categories,
        News: News,
    },
    {
        navigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, tintColor}) => {
              const { routeName } = navigation.state;
              let source;
              if (routeName === 'Categories') {
                source = focused ? require("../assets/icons/home.png") : require("../assets/icons/home-outlined.png");
              }   

              if (routeName === 'News') {
                source = focused ? require("../assets/icons/news.png") : require("../assets/icons/news-outlined.png");
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

  export default PortalTab;