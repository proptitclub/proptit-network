import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'native-base'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import ProfileScreen from '../screens/ProfileScreen'
import NewsFeedScreen from '../screens/NewsFeedScreen'

const HomeNavigator = createBottomTabNavigator(
  {
    NewsFeed: {
      screen: NewsFeedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Icon name="home" type="AntDesign" style={{ color: tintColor }} />
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <Icon
              name="profile"
              type="AntDesign"
              style={{ color: tintColor }}
            />
          )
        },
      },
    },
    // Notification: {
    //     screen: Notification,
    //     navigationOptions: {
    //         tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //             return (
    //                 <Icon name="notification" type="AntDesign" style={{ color: tintColor }} />

    //             )
    //         },
    //     }
    // },
    // Search: {
    //     screen: Notification,
    //     navigationOptions: {
    //         tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //             return <Icon name="search1" type="AntDesign" style={{ color: tintColor }} />
    //         },
    //     }
    // }
  },
  {
    initialRouteName: 'NewsFeed',
    tabBarOptions: {
      showLabel: false,
    },
  },
)

export default createAppContainer(HomeNavigator)