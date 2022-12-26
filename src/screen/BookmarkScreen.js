import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import {Colors, Fonts} from '../contants';
import {Display} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../components/Separator';
import HeaderComp from '../components/HeaderComp';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Button from '../components/Button';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ListItemSeparator = () => (
  <View
    style={{
      height: 0.8,
      backgroundColor: Colors.DEFAULT_GREY,
      width: '100%',
      marginVertical: 10,
    }}
  />
);

const BookmarkScreen = ({navigation}) => {
  const sheetRef = useRef(null);
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Bookmarks</Text>
      </View>
      <HeaderComp />
      <View style={styles.container1}>
        <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
        <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
        <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
        <Button title="Close" onPress={() => handleClosePress()} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <BottomSheetFlatList
            data={data}
            keyExtractor={i => i}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  bookmarkList: {
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#eee',
    // width:'100%',
    padding: 10,
    borderRadius: 10,
    margin: 6,
  },
});

export default BookmarkScreen;
