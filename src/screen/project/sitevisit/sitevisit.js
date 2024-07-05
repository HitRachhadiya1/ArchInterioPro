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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import metrics from '../../../utils/metrics';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: 1,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 2,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 3,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 4,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 5,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 6,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 7,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 8,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 13,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 9,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 10,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 11,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
  {
    id: 12,
    type: 'sdcd',
    date: '23-06-2024',
    time: '10:00',
    purpose: 'test',
  },
];

const Sitevisit = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.themecolor}}>
      <Backcom title="Site Visit" navigation={props.navigation} />
      {/* <View style={style.serchview}>
        <Fontisto
          style={{}}
          name="search"
          color={colors.themecolor}
          size={20}
        />
        <TextInput
          keyboardType="default"
          placeholder="Search Here..."
          placeholderTextColor={colors.darkgray}
          style={style.searchtextin}
          onChangeText={value => {
            searchFilter(value);
          }}
        />
      </View> */}
      <FlatList
        data={data}
        contentContainerStyle={{paddingBottom: '16%'}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <LinearGradient
              animation="slideInLeft"
              colors={['#393E46', '#393E46', '#393E46']}
              style={{
                padding: '3%',
                borderRadius: 15,
                backgroundColor: '#393E46',
                marginVertical: '3%',
                paddingVertical: '5%',
                flexDirection: 'row',
                width: '90%',
                marginHorizontal: '5%',
                shadowColor: '#ffffff',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.17,
                shadowRadius: 2.54,
                elevation: 1,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: "red",
                    width: metrics.WIDTH * 0.9,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/* <FontAwesome5
                    name="home"
                    size={20}
                    style={{
                      marginHorizontal: '5%',
                      color: '#1864ab',
                    }}
                  /> */}
                    {/* <Image
                      source={require('../../assets/fran.png')}
                      style={{
                        height: metrics.HEIGHT * 0.03,
                        width: metrics.WIDTH * 0.06,
                        marginLeft: '9%',
                        marginRight: '7%',
                      }}
                    /> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: '6%',
                      }}>
                      <EvilIcons name="calendar" color={'#00ADB5'} size={22} />
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontWeight: '400',
                          fontSize: 15,
                        }}>
                        {item.date}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: '3%',
                  marginHorizontal: '3%',
                  width: metrics.WIDTH * 0.83,
                }}>
                <View
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: colors.themecolor,
                  }}
                />
              </View> */}
                <View style={{marginVertical: '4%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Type :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.type}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '2%',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Time Alloted :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '2%',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Purpose :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.purpose}
                    </Text>
                  </View>
                </View>
                {/* <View
                  style={{
                    marginHorizontal: '4%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#009199',
                      width: metrics.WIDTH * 0.2,
                      paddingVertical: '1.7%',
                      borderRadius: 10,
                      borderWidth: 0.6,
                      borderColor: '#00ADB5',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="account-edit-outline"
                      size={25}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#009199',
                      width: metrics.WIDTH * 0.35,
                      borderWidth: 0.4,
                      borderColor: '#00ADB5',
                      paddingVertical: '1.7%',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '6%',
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '500',
                        fontSize: 16,
                        marginRight: '8%',
                      }}>
                      Delete
                    </Text>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      size={25}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                </View> */}
                
              </View>
            </LinearGradient>
          );
        }}
      />
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Createsitevisit', {
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

export default Sitevisit;

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
