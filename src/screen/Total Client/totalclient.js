/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import Backcom from '../../component/backcom';
import metrics from '../../utils/metrics';
import {useBasicContext} from '../../context/basic_context';

const Totalclient = props => {
  const {GetClint, clint_array, clint_loading} = useBasicContext();

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      GetClint(props);
    });
    return unsubscribe;
  }, [props]);

  return (
    <View style={{backgroundColor: colors.themecolor, flex: 1}}>
      <Backcom title="Total Client" navigation={props.navigation} />
      {clint_loading === true ? (
        <Image
          source={require('../../assets/load.gif')}
          style={{
            width: 200,
            height: 50,
            marginTop: metrics.HEIGHT * 0.4,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          // resizeMode="contain"
        />
      ) : (
        <FlatList
          data={clint_array}
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
                  marginTop: '3%',
                  marginBottom: '2%',
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
                  elevation: 3,
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
                      <Image
                        source={require('../../assets/fran.png')}
                        style={{
                          height: metrics.HEIGHT * 0.03,
                          width: metrics.WIDTH * 0.06,
                          marginLeft: '9%',
                          marginRight: '7%',
                        }}
                      />
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontWeight: '600',
                          marginLeft: '2%',
                          fontSize: 16,
                        }}>
                        {/* {item.franchise} */}
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
                  <View style={{marginVertical: '6%'}}>
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
                        Email :
                      </Text>
                      <Text
                        style={{
                          color: '#CCD6DD',
                          marginLeft: '3%',
                          fontWeight: '550',
                          fontSize: 15,
                        }}>
                        {item.email}
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
                        Contact :
                      </Text>
                      <Text
                        style={{
                          color: '#CCD6DD',
                          marginLeft: '3%',
                          fontWeight: '550',
                          fontSize: 15,
                        }}>
                        {item.contact}
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
                        Status :
                      </Text>
                      <Text
                        style={{
                          color: '#CCD6DD',
                          marginLeft: '3%',
                          fontWeight: '550',
                          fontSize: 15,
                        }}>
                        {item.status}
                      </Text>
                    </View>
                  </View>
                  <View
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
                        width: metrics.WIDTH * 0.35,
                        paddingVertical: '1.7%',
                        borderRadius: 10,
                        borderWidth: 0.6,
                        borderColor: '#00ADB5',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: '500',
                          fontSize: 16,
                          marginRight: '8%',
                        }}>
                        Edit
                      </Text>
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
                  </View>
                </View>
              </LinearGradient>
            );
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Addclient')}
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

export default Totalclient;
