import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
  Modal,
} from 'react-native';
import {Colors, Fonts, Images} from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Display} from '../utils';
import Separator from '../components/Separator';
import ToggleButton from '../components/ToggleButton';
// import ImagePicker from 'react-native-image-crop-picker';
const AccountScreen = ({navigation}) => {
  const [image, setimage] = useState();
  const [lighranddark, setlighranddark] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [secondModel, setSecondModel] = useState(false);
  // const Selectimage = () =>
  //   Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: 'Camera',
  //       onPress: () => Opencamera(''),
  //     },
  //     {
  //       text: 'OpenGallery',
  //       onPress: () => OpenGallery(''),
  //       style: 'cancel',
  //     },
  //     {text: 'Cancel', onPress: () => console.log('')},
  //   ]);
  // const Opencamera = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     setimage(image.path);
  //     console.log('----------' + JSON.stringify(image));
  //   });
  // };
  // const OpenGallery = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     setimage(image.path);
  //     console.log('----------' + JSON.stringify(image));
  //   });
  // };
  const ModelCloge = () => {
    console.log('====openModel===', openModel);
    setOpenModel(false);
    console.log('====secondModel===', secondModel);
    setSecondModel(true);
    navigation.navigate('Maps');
  };
  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={20}
          color={Colors.DEFAULT_WHITE}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Account</Text>
        <View>
          <Feather name="bell" size={20} color={Colors.DEFAULT_WHITE} />
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>12</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileHeaderContainer}>
        <TouchableOpacity
          onPress={() => {
            // Selectimage();
          }}
          style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={
              // image ? {uri: image} :
              require('../assets/images/user_avatar.png')
            }
          />
        </TouchableOpacity>

        <View style={styles.profileTextContainer}>
          <Text style={styles.nameText}>Ameen Farook</Text>
          <Text style={styles.emailText}>ameeen.faroook@gmail.com</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
          <View style={styles.menuIcon}>
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
          </View>
          <Text style={styles.menuText}>My All {'\n'}Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
          <View style={{...styles.menuIcon, backgroundColor: Colors.LIGHT_RED}}>
            <MaterialCommunityIcons
              name="gift-outline"
              size={18}
              color={Colors.SECONDARY_RED}
            />
          </View>
          <Text style={styles.menuText}>Offers {'&\n'} Promos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
          <View
            style={{...styles.menuIcon, backgroundColor: Colors.LIGHT_YELLOW}}>
            <Ionicons
              name="location-outline"
              size={18}
              color={Colors.DEFAULT_YELLOW}
            />
          </View>
          <Text style={styles.menuText}>Delivery Addresses</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeaderText}>My Account</Text>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Ionicons
              name="person-outline"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>Manage Profile</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.INACTIVE_GREY}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Ionicons
              name="card-outline"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>Payment</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.INACTIVE_GREY}
            size={20}
          />
        </TouchableOpacity>

        <Text style={styles.sectionHeaderText}>Notification</Text>
        <View style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Feather name="bell" size={18} color={Colors.DEFAULT_GREEN} />
            <Text style={styles.sectionText}>Notification</Text>
          </View>
          <ToggleButton size={0.5} />
        </View>
        <View style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Feather name="bell" size={18} color={Colors.DEFAULT_GREEN} />
            <Text style={styles.sectionText}>Promos & Offers Notification</Text>
          </View>
          <ToggleButton size={0.5} />
        </View>

        <Text style={styles.sectionHeaderText}>More</Text>
        <View style={styles.sectionContainer} activeOpacity={0.8}>
          <TouchableOpacity
            onPress={() => setSecondModel(true)}
            style={styles.sectionTextContainer}>
            <Ionicons
              name="ios-color-palette-outline"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>Dark Mode</Text>
          </TouchableOpacity>
          <ToggleButton size={0.5} />
        </View>
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.sectionTextContainer}
            activeOpacity={0.8}
            onPress={() => setOpenModel(true)}
            // onPress={() => logout()}
          >
            <MaterialCommunityIcons
              name="logout"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModel}
        onRequestClose={() => {
          setOpenModel(!openModel);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {borderColor: 'red'}]}>
            <Pressable onPress={() => ModelCloge()}>
              <Text style={styles.textStyle}>Hide Modal 1</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModel}
        onRequestClose={() => {
          setSecondModel(!secondModel);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {borderColor: 'pink'}]}>
            <Pressable onPress={() => setSecondModel(!secondModel)}>
              <Text style={styles.textStyle}>Hide Modal 2</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
    // backgroundColor:'red'
  },
  backgroundCurvedContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  alertBadge: {
    backgroundColor: Colors.DEFAULT_YELLOW,
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    fontSize: 10,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  profileHeaderContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImageContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    elevation: 3,
  },
  profileImage: {
    width: Display.setWidth(15),
    height: Display.setWidth(15),
    borderRadius: 32,
  },
  tongImage: {
    width: Display.setWidth(12),
    height: Display.setWidth(7),
    // borderRadius: 32,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  emailText: {
    fontSize: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  menuContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    // backgroundColor:'red'
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  menuIcon: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: Display.setWidth(8),
    width: Display.setWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  menuText: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_BLACK,
    textAlign: 'center',
    marginTop: 5,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 20,
    // backgroundColor:'red'

  },
  sectionHeaderText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginTop: 25,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sectionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: Colors.INACTIVE_GREY,
    marginLeft: 10,
  },

  ////
  centeredView: {
    flex: 1,
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    backgroundColor: Colors.RGBA,
  },
  modalView: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 20,
    // add
    height: Display.setWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    borderWidth: 5,
  },
  textStyle: {
    fontSize: 17,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 10,
  },
});

export default AccountScreen;
