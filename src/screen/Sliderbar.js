import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../contants';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Sliderbar = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Image
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: 'contain',
                  borderRadius: 55 / 2,
                }}
                source={require('../assets/images/user_avatar.png')}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Text style={styles.title}>John Doe</Text>
                <Text style={styles.caption}>@j_doe</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>80</Text>
                <Text style={styles.caption}>Following</Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.paragraph, styles.caption]}>100</Text>
                <Text style={styles.caption}>Followers</Text>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/add.png')}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/add.png')}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/add.png')}
                />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/add.png')}
                />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/add.png')}
                />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableOpacity
              onPress={() => {
                alert('alert');
              }}>
              <View style={styles.preference}>
                <Text style={{marginLeft: 10}}>Dark Theme</Text>
              </View>
            </TouchableOpacity>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Image
              style={{width: 12, height: 12}}
              source={require('../assets/images/add.png')}
            />
          )}
          label="Sign Out"
          onPress={() => {
            alert('alert');
          }}
        />
      </Drawer.Section>
    </View>
    // <View>
    //   <ImageBackground source={Images.bgPattern} style={{height: 140}}>
    //     <Image source={Images.user} style={styles.userImg} />
    //   </ImageBackground>
    //   <TouchableOpacity
    //     onPress={() => navigation.closeDrawer()}
    //     style={styles.drawerListWrapper}>
    //     <Text>sssss</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default Sliderbar;
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: 'white',
  },
  drawerListWrapper: {
    marginTop: 65,
  },
  ///
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
