import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Settings from '../screens/Settings/Settings';
import Details from '../screens/Details/Details';
import { colors, shadows } from '../config/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigatorScreen from './HomeNavigator';

const TabNavigator = createBottomTabNavigator();
let activeColor = colors;
let activeShadow = shadows;

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trending') {
              iconName = 'trending-up';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            } else if (route.name === 'Details') {
              iconName = 'information-variant';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: activeColor.accent,
          tabBarInactiveTintColor: activeShadow.shadowBlack,
          tabBarStyle: {
            backgroundColor: activeShadow.shadowLight,
            borderTopColor: activeShadow.shadowDark,
            borderTopWidth: 1,
          },
          tabBarShowLabel: false,
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: activeColor.accent,
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 22,
          },
          headerStyle: {
            backgroundColor: activeShadow.shadowLight,
            },
        })}
      >
        <TabNavigator.Screen name="Trending" component={HomeNavigatorScreen} 
          options={{
            headerShown: false,
          }}
        />
        <TabNavigator.Screen name="Settings" component={Settings} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;