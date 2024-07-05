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
  Image,
} from 'react-native';
import colors from '../../../utils/colors';
import Backcom from '../../../component/backcom';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import metrics from '../../../utils/metrics';
import * as Animatable from 'react-native-animatable';

const data = [
  {
    id: 250,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 249,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 3233,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 423,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 3235,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 36,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 3327,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 48,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 13,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 9,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 10,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 11,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
  {
    id: 12,
    name: 'name',
    start_date: '23-06-2024',
    due_date: 'ID-002',
  },
];

const Milestones = props => {
  const [getcon, setcon] = useState(false);
  const [getindex, setindex] = useState();

  return (
    <View style={{backgroundColor: colors.themecolor, flex: 1}}>
      <Backcom title="Projects" navigation={props.navigation} />
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
                    <Text
                      style={{
                        color: '#00ADB5',
                        fontWeight: '600',
                        marginLeft: '13%',
                        fontSize: 17,
                      }}>
                      # {item.id}
                    </Text>
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
                <View style={{marginTop: '6%', marginBottom: '3%'}}>
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
                      Name :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.name}
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
                      Start Date :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.start_date}
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
                      Due Date :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.due_date}
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
                {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '5%',
                    marginRight: '5%',
                  }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#00ADB5',
                      paddingVertical: '3%',
                      paddingHorizontal: '16%',
                      borderRadius: 7,
                    }}>
                    <Text
                      style={{
                        color: colors.themecolor,
                        fontWeight: '700',
                        fontSize: 16,
                      }}>
                      EDIT
                    </Text>
                    <MaterialCommunityIcons
                      name="square-edit-outline"
                      color={colors.themecolor}
                      size={24}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#00ADB5',
                      paddingVertical: '3%',
                      paddingHorizontal: '13%',
                      borderRadius: 7,
                    }}>
                    <Text
                      style={{
                        color: colors.themecolor,
                        fontWeight: '700',
                        fontSize: 16,
                      }}>
                      DELETE
                    </Text>
                    <MaterialCommunityIcons
                      name="square-edit-outline"
                      color={colors.themecolor}
                      size={24}
                    />
                  </TouchableOpacity>
                </View> */}
              </View>
            </LinearGradient>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Createbasic')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderWidth: 2,
          borderColor: '#00ADB5',
          backgroundColor: '#00ADB5',
          height: 55,
          width: 55,
          borderRadius: 55,
          alignItems: 'center',
          justifyContent: 'center',

          shadowColor: '#67707e',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 3,
        }}>
        <Feather name="plus" color={'#fff'} size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Milestones;

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
  },
  searchtextin: {
    width: '80%',
    marginLeft: '5%',
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },
});
