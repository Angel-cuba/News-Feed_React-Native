import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Settings from '../screens/Settings/Settings';
import { defaultTheme, shadows } from '../config/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigatorScreen from './HomeNavigator';

// Context
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Translation
import { useTranslation } from 'react-i18next';

const TabNavigator = createBottomTabNavigator();

const RootNavigator = () => {
  const { themeApp } = useContext(ThemeContext);
  let activeColors = defaultTheme[themeApp.mode];
  let activeShadow = shadows;

  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trending') {
              iconName = 'trending-up';
            } else if (
              route.name === t('common:screenSettings') 
            ) {
              iconName = 'cog';
            } else if (
              route.name === t('common:screenDetails')
            ) {
              iconName = 'information-variant';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: activeColors.accent,
          tabBarInactiveTintColor: activeShadow.shadowBlack,
          tabBarStyle: {
            backgroundColor: activeColors.secondary,
            borderTopColor: activeShadow.shadowDark,
            borderTopWidth: 1,
          },
          tabBarShowLabel: false,
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: activeColors.accent,
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 22,
          },
          headerStyle: {
            backgroundColor: activeShadow.shadowLight,
          },
          animationEnabled: false,
        })}
      >
        <TabNavigator.Screen
          name="Trending"
          component={HomeNavigatorScreen}
          options={{
            headerShown: false,
          }}
        />
        <TabNavigator.Screen
          name={t('common:screenSettings')}
          component={Settings}
          options={{
            headerTitleStyle: {
              color: activeColors.black,
              fontSize: 22,
              fontWeight: 'bold',
              paddingLeft: 22,
            },
            headerStyle: {
              backgroundColor: activeColors.secondary,
            },
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
