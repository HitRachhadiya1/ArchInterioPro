/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  BackHandler,
} from 'react-native';
import colors from '../utils/colors';
import metrics from '../utils/metrics';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {useFocusEffect} from '@react-navigation/native';
import fonts from '../utils/fonts';
import {PieChart} from 'react-native-gifted-charts';

const Home = props => {
  useFocusEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });
  const data = [
    {value: 54, color: '#2caffe', text: '54%'},
    {value: 40, color: '#e6e600', text: '30%'},
    {value: 20, color: '#009900', text: '26%'},
  ];

  return (
    <View style={{backgroundColor: colors.themecolor, flex: 1}}>
      <StatusBar backgroundColor={colors.themecolor} translucent={false} />
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: '5%',
          paddingVertical: metrics.HEIGHT * 0.01,
          backgroundColor: colors.themecolor,
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Feather name="menu" size={30} color={'#00ADB5'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginHorizontal: '5%',
        }}>
        <Text
          style={{
            color: '#EEEEEE',
            fontSize: 30,
            fontWeight: '600',
            marginVertical: '7%',
          }}>
          DASHBOARD
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                animation="slideInLeft"
                style={{
                  marginTop: metrics.HEIGHT * 0.02,
                  padding: '4%',
                  width: metrics.WIDTH * 0.428,
                  backgroundColor: '#393E46',
                  borderRadius: 20,
                  elevation: 20,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Totalclient')}
                  activeOpacity={0.6}
                  style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                  <View style={{width: metrics.WIDTH * 0.6}}>
                    <Text
                      style={{
                        color: '#EEEEEE',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      Total Client
                    </Text>
                    <Text
                      style={{
                        color: '#00ADB5',
                        fontWeight: '800',
                        fontSize: 36,
                        marginTop: '3%',
                      }}>
                      10
                    </Text>
                  </View>
                  {/* <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/client.png')}
                    style={{
                      height: metrics.HEIGHT * 0.06,
                      width: metrics.WIDTH * 0.135,
                    }}
                  />
                </View> */}
                </TouchableOpacity>
              </View>
              <View
                animation="slideInLeft"
                style={{
                  marginTop: metrics.HEIGHT * 0.02,
                  padding: '4%',
                  width: metrics.WIDTH * 0.428,
                  backgroundColor: '#393E46',
                  borderRadius: 20,
                  elevation: 20,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate('Project')}
                  style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                  <View style={{width: metrics.WIDTH * 0.6}}>
                    <Text
                      style={{
                        color: '#EEEEEE',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      Total Project
                    </Text>
                    <Text
                      style={{
                        color: '#00ADB5',
                        fontWeight: '800',
                        fontSize: 36,
                        marginTop: '3%',
                      }}>
                      6
                    </Text>
                  </View>
                  {/* <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/client.png')}
                    style={{
                      height: metrics.HEIGHT * 0.06,
                      width: metrics.WIDTH * 0.135,
                    }}
                  />
                </View> */}
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                animation="slideInLeft"
                style={{
                  marginTop: metrics.HEIGHT * 0.02,
                  padding: '4%',
                  width: metrics.WIDTH * 0.428,
                  backgroundColor: '#393E46',
                  borderRadius: 20,
                  elevation: 20,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate('TaskManager')}
                  style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                  <View style={{width: metrics.WIDTH * 0.6}}>
                    <Text
                      style={{
                        color: '#EEEEEE',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      Total Task
                    </Text>
                    <Text
                      style={{
                        color: '#00ADB5',
                        fontWeight: '800',
                        fontSize: 36,
                        marginTop: '3%',
                      }}>
                      6
                    </Text>
                  </View>
                  {/* <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/client.png')}
                    style={{
                      height: metrics.HEIGHT * 0.06,
                      width: metrics.WIDTH * 0.135,
                    }}
                  />
                </View> */}
                </TouchableOpacity>
              </View>
              <View
                animation="slideInLeft"
                style={{
                  marginTop: metrics.HEIGHT * 0.02,
                  padding: '4%',
                  width: metrics.WIDTH * 0.428,
                  backgroundColor: '#393E46',
                  borderRadius: 20,
                  elevation: 20,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    props.navigation.navigate('TotalInvoice');
                  }}
                  style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                  <View style={{width: metrics.WIDTH * 0.6}}>
                    <Text
                      style={{
                        color: '#EEEEEE',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      Total Invoice
                    </Text>
                    <Text
                      style={{
                        color: '#00ADB5',
                        fontWeight: '800',
                        fontSize: 36,
                        marginTop: '3%',
                      }}>
                      5
                    </Text>
                  </View>
                  {/* <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/client.png')}
                    style={{
                      height: metrics.HEIGHT * 0.06,
                      width: metrics.WIDTH * 0.135,
                    }}
                  />
                </View> */}
                </TouchableOpacity>
              </View>
            </View>
            <View
              animation="slideInLeft"
              style={{
                marginTop: metrics.HEIGHT * 0.02,
                padding: '4%',
                backgroundColor: '#393E46',
                borderRadius: 20,
                elevation: 20,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {}}
                style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                <View style={{width: metrics.WIDTH * 0.6}}>
                  <Text
                    style={{
                      color: '#EEEEEE',
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    Total Expense
                  </Text>
                  <Text
                    style={{
                      color: '#00ADB5',
                      fontWeight: '800',
                      fontSize: 36,
                      marginTop: '3%',
                    }}>
                    530000
                  </Text>
                </View>
                {/* <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/client.png')}
                    style={{
                      height: metrics.HEIGHT * 0.06,
                      width: metrics.WIDTH * 0.135,
                    }}
                  />
                </View> */}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: '10%',
              alignItems: 'center',
              width: metrics.WIDTH * 1,
            }}>
            <Text
              style={{
                color: '#EEEEEE',
                fontSize: 24,
                fontWeight: '500',
                marginBottom: '4%',
                marginRight: '4%',
              }}>
              Project
            </Text>
            <PieChart
              radius={150}
              textSize={18}
              showText
              // isThreeD
              textColor="white"
              focusOnPress
              // showTextBackground
              textBackgroundRadius={26}
              data={data}
              fontWeight="bold"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: '5%',
              }}>
              <Octicons name="dot-fill" color={'#2caffe'} size={26} />
              <Text
                style={{
                  color: '#EEEEEE',
                  marginLeft: '2%',
                  marginRight: '5%',
                  marginTop: '0.5%',
                }}>
                In Progress
              </Text>
              <Octicons name="dot-fill" color={'#e6e600'} size={26} />
              <Text
                style={{
                  color: '#EEEEEE',
                  marginLeft: '2%',
                  marginRight: '5%',
                  marginTop: '0.5%',
                }}>
                On Hold
              </Text>
              <Octicons name="dot-fill" color={'#009900'} size={26} />
              <Text
                style={{
                  color: '#EEEEEE',
                  marginLeft: '2%',
                  marginRight: '5%',
                  marginTop: '0.5%',
                }}>
                Completed
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
