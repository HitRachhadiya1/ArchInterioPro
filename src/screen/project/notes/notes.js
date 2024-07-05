/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import colors from '../../../utils/colors';
import Backcom from '../../../component/backcom';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from '../../../utils/metrics';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: 1,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
  {
    id: 2,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
  {
    id: 3,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
  {
    id: 4,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
  {
    id: 5,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
  {
    id: 6,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
  {
    id: 7,
    name: 'Suryo',
    date: '23-06-2024',
    code: 'ID-002',
  },
];

const Notes = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.themecolor}}>
      <Backcom title="Notes" navigation={props.navigation} />
      {/* <View style={style.serchview}>
        <Fontisto style={{}} name="search" color={'#00ADB5'} size={20} />
        <TextInput
          keyboardType="default"
          placeholder="Search Here..."
          placeholderTextColor={colors.darkgray}
          style={style.searchtextin}
          onChangeText={() => {}}
        />
      </View> */}
      <FlatList
        data={data}
        style={{marginBottom: 50, paddingTop: '5%'}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <LinearGradient
              animation="slideInLeft"
              colors={['#393E46', '#393E46', '#393E46']}
              style={{
                padding: '3%',
                elevation: 8,
                borderRadius: 15,
                marginTop: '3%',
                marginBottom: '2%',
                flexDirection: 'row',
                width: '90%',
                marginHorizontal: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: "red",
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: '1%',
                  width: '100%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <MaterialIcons
                    name="sticky-note-2"
                    size={20}
                    style={{
                      marginHorizontal: '5%',
                      color: '#00ADB5',
                    }}
                  />
                  <Text
                    style={{
                      color: colors.white,
                      fontWeight: '500',
                      marginLeft: '6%',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name="edit" size={25} color={'#00ADB5'} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          );
        }}
      />
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Createnote', {
            item: '',
          })
        }
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00ADB5',
          width: 50,
          height: 50,
          //   width: metrics.WIDTH * 0.25,
          alignSelf: 'flex-end',
          padding: 10,
          borderRadius: 50,
          right: 20,
          position: 'absolute',
          bottom: 20,
        }}>
        <AntDesign name="plus" size={30} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Notes;

const style = StyleSheet.create({
  textinputview: {
    // marginTop: metrics.HEIGHT * 0.02,
    marginHorizontal: '5%',
    elevation: 3,
    borderRadius: 5,
    backgroundColor: colors.white,
    height: metrics.HEIGHT * 0.07,
    justifyContent: 'center',
  },
  serchview: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 15,
    // height: metrics.HEIGHT * 0.07,
    // marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 8,
    marginHorizontal: '5%',
    marginBottom: '2%',
    background: 'transparent',
    paddingHorizontal: '3%',
    padding: 5,
    marginTop: 20,
  },
  searchtextin: {
    width: '80%',
    marginLeft: '5%',
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },
});
