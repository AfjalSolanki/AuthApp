import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {ScreensArray} from '../arrays';
import CustomDrawer2 from './CustomDrawer1';
import {colors, constant} from '../constant';

const Drawer = createDrawerNavigator();

const DrawerNav1 = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'slide',
        overlayColor: 'transparent',
        swipeEdgeWidth: Platform.OS === 'android' && 180,
      }}
      drawerContent={props => <CustomDrawer2 {...props} />}>
      {console.log('============', ScreensArray)}
      {ScreensArray.map((_, i) => (
        <Drawer.Screen
          key={i}
          name={_.route}
          component={_.component}
          options={{
            item: _,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNav1;

const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: colors.sceneBg,
    // paddingTop: 40,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
