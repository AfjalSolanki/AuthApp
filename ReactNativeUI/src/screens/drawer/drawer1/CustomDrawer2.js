import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors, constant} from '../constant';
import Icon from '../../../components/Icons';
const DrawerItem = ({
  name,
  onPress,
  tabBarTestID,
  type,
  Iname,
  Drnotification,
  color,
  activeItemColor,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[styles.drawerItem, {backgroundColor: activeItemColor}]}
      testID={tabBarTestID}
      accessibilityRole="button">
      <View style={styles.row}>
        <Icon type={type} name={Iname} {...{color}} />
        <Text style={[styles.lable]}>{name}</Text>
      </View>
      {Drnotification > 0 && (
        <View
          style={[
            styles.notficition,
            {
              backgroundColor:
                Drnotification > 5 ? colors.important : colors.normal,
            },
          ]}>
          <Text>{Drnotification}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
const ProjectItem = () => {
  return <></>;
};
const ProfileItem = () => {
  return <></>;
};
const CustomDrawer2 = props => {
  const {state, descriptors, navigation} = props;
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={[styles.view, styles.marginTop]}>
        <Text>header</Text>
      </View>
      {/* Drawer Items List */}
      <DrawerContentScrollView
        {...props}
        style={[styles.view, styles.marginVertical]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const {options} = descriptors[route.key];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          console.log('------', options);
          const color = isFocused ? colors.dark : colors.darkGray;
          const activeItemColor = isFocused ? colors.primary : null;
          const drawerItem = options.item;
          console.log('---==========================---', drawerItem);

          return (
            <DrawerItem
              key={index}
              name={drawerItem.name}
              tabBarTestID={options.tabBarTestID}
              onPress={onPress}
              Iname={drawerItem.icon}
              type={drawerItem.type}
              Drnotification={drawerItem.Drnotification}
              color={color}
              activeItemColor={activeItemColor}
            />
          );
        })}
        {/* {state.routes.map((item, index) => {
            return <Text>{'value'}</Text>;
          })} */}
        {/* 2nd menu(projects) */}
        {/* profile menu */}
      </DrawerContentScrollView>

      {/* footer */}
      <View style={[styles.view, styles.marginBottom]}>
        <Text>footer</Text>
      </View>
    </View>
  );
};

export default CustomDrawer2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {marginTop: constant.SPACING / 2},
  marginBottom: {marginBottom: constant.SPACING / 2},
  marginVertical: {marginVertical: constant.SPACING / 2},
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lable: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING,
  },
  notficition: {
    paddingVertical: constant.SPACING / 4,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
});
