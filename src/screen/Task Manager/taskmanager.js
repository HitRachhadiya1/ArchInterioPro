/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, AsyncStorage } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native';
import Backcom from '../../component/backcom';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';
import { ACCEPT_HEADER, gettaskmanager_url, taskmanagerdelete_url } from '../../utils/baseurl';
import { useLoginContext } from '../../context/login_context';
import { Image } from 'react-native';
import Toast from 'react-native-simple-toast';
import RNModal from 'react-native-modal';
import { ActivityIndicator } from 'react-native';

const data = [
  {
    id: 1,
    task_name: 'Test',
    franchise_name: 'Applified',
    project_name: 'testing1',
    milestones: 'ws',
    status: ['To Do', 'Working', 'To Check', 'Completed', 'Client Approva'],
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
  {
    id: 2,
    task_name: 'Test',
    franchise_name: 'Applified',
    project_name: 'testing1',
    milestones: 'ws',
    status: ['To Do', 'Working', 'To Check', 'Completed', 'Client Approva'],
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
  {
    id: 3,
    task_name: 'Test',
    franchise_name: 'Applified',
    project_name: 'testing1',
    milestones: 'ws',
    status: ['To Do', 'Working', 'To Check', 'Completed', 'Client Approva'],
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
  {
    id: 4,
    task_name: 'Test',
    franchise_name: 'Applified',
    project_name: 'testing1',
    milestones: 'ws',
    status: ['To Do', 'Working', 'To Check', 'Completed', 'Client Approva'],
    start_date: '23-06-2024',
    end_date: '23-06-2024',
  },
];

const Status = [
  {
    id: 0,
    title: 'Select Status',
  },
  {
    id: 1,
    title: 'On Hold',
  },
  {
    id: 2,
    title: 'In Progress',
  },
  {
    id: 3,
    title: 'Completed',
  },
  {
    id: 4,
    title: 'Cancelled',
  },
  {
    id: 5,
    title: 'Pending',
  },
];

const TaskManager = props => {

  const { setLogout } = useLoginContext();
  const [value, setValue] = useState([]);
  const [getload, SetLoad] = useState(false);
  const [getarray, SetArray] = useState([]);

  const [taskid, settaskid] = useState('');

  const [getstatusid, setstatusid] = useState('');
  const [statusmodel, setstatusmodal] = useState(false);


  const data2 = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];


  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      gettaskmanager();
    });
    return unsubscribe;
  }, [props]);

  const gettaskmanager = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    axios
      .get(gettaskmanager_url, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        if (res.data.status === 'Token is Expired') {
          setLogout(props);
          SetLoad(false);
        } else if (res.data.success === 1) {
          // console.log('res-getmaterial', res.data);
          console.log(JSON.stringify(res.data.data, 0, 2));
          SetArray(res.data.data);
          SetLoad(false);
        } else {
          null;
          SetLoad(false);
        }
      })
      .catch(err => {
        console.log('log', err);
        SetLoad(false);
      });
  };

  const deteletaskmanager =  async id => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    const formdata = new FormData();
    formdata.append('id',id);

    console.log('formdata-->', formdata);
    axios
      .post(taskmanagerdelete_url, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        console.log('resss', res.data);
        if (res.data.success == 1) {
          Toast.show(res.data.message);
          SetLoad(false);
          gettaskmanager();
        } else {
          null;
          SetLoad(false);
        }
      })
      .catch(err => {
        console.log('errr---', err);
      });
  };

  const renderItem = (item, index) => {
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome
                name="tasks"
                size={20}
                style={{
                  marginLeft: '13%',
                  marginRight: '6%',
                  color: '#00ADB5',
                }}
              />
              <Text
                style={{
                  color: '#00ADB5',
                  fontWeight: '600',
                  marginLeft: '2%',
                  fontSize: 16,
                }}>
                {item.name}
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
          <View style={{ marginTop: '6%' }}>
            {/* <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: '2%',
                      marginHorizontal: '4%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontWeight: '700',
                        fontSize: 15,
                      }}>
                      Franchise Name :
                    </Text>
                    <Text
                      style={{
                        color: '#CCD6DD',
                        marginLeft: '3%',
                        fontWeight: '550',
                        fontSize: 15,
                      }}>
                      {item.franchise_name}
                    </Text>
                  </View> */}
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
                Project Name :
              </Text>

                {item.project !== null ?
                <Text
                style={{
                  color: '#CCD6DD',
                  marginLeft: '3%',
                  fontWeight: '550',
                  fontSize: 15,
                }}>
                  {item.project.name}
                  </Text> : null}


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
                Milestone :
              </Text>
              {item.milestones !== null ?
                <Text
                style={{
                  color: '#CCD6DD',
                  marginLeft: '3%',
                  fontWeight: '550',
                  fontSize: 15,
                }}>
                  {item.milestones.name}
                  </Text> : null}

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
                End Date :
              </Text>
              <Text
                style={{
                  color: '#CCD6DD',
                  marginLeft: '3%',
                  fontWeight: '550',
                  fontSize: 15,
                }}>
                {item.end_date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '2%',
                marginHorizontal: '4%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontWeight: '700',
                  fontSize: 15,
                }}>
                Status : {''}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  item.status == 3
                    ? Toast.show('Status already completed')
                    : setstatusmodal(true);
                  setstatusid(item.id);
                }}
                style={{
                  backgroundColor: colors.white,
                  padding: 5,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    marginLeft: '3%',
                    color: colors.black,
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  {item.status == 1
                    ? 'On Hold'
                    : item.status == 2
                      ? 'In Progress'
                      : item.status == 3
                        ? 'Completed'
                        : item.status == 4
                          ? 'Cancelled'
                          : item.status == 5
                            ? 'Pending'
                            : null}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '4%',
              marginRight: '5%',
              marginTop: '5.5%',
            }}>
            <TouchableOpacity
              //   onPress={() =>
              //     props.navigation.navigate('AddMaterialType', {
              //       item: item,
              //     })
              //   }
              onPress={() =>
                props.navigation.navigate('AddTaskm', {
                  item: item,
                })
              }>
              <Text
                style={{
                  backgroundColor: '#00ADB5',
                  width: metrics.WIDTH * 0.355,
                  paddingVertical: '3%',
                  borderRadius: 7,
                  color: colors.black,
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                EDIT
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#00ADB5',
                width: metrics.WIDTH * 0.355,
                paddingVertical: '3%',
                borderRadius: 7,
              }}
              onPress={() => {
                deteletaskmanager(item.id);
              }}>
                <Text
                  style={{
                    color: colors.black,
                    fontWeight: '700',
                    textAlign: 'center',
                  }}>
                  DELETE
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.themecolor }}>
      <Backcom title="Task Manager" navigation={props.navigation} />
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
              onChangeText={() => {}}
            />
          </View> */}
      {getload === true ? (
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
          data={getarray}
          contentContainerStyle={{ paddingBottom: '16%' }}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return renderItem(item, index);
          }}
        />
      )}
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('AddTaskm', {
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
      <RNModal
        animationType="slide"
        transparent={true}
        isVisible={statusmodel}
        onBackButtonPress={() => {
          setstatusmodal(false);
        }}
        onBackdropPress={() => {
          setstatusmodal(false);
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 5,
            // flex: 1,
            width: metrics.WIDTH * 0.8,
            alignSelf: 'center',
            marginTop: '10%',
            marginBottom: '10%',
            paddingTop: 15,
            elevation: 3,
          }}>
          <FlatList
            data={Status}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{ paddingBottom: '5%', marginHorizontal: '5%' }}
                  onPress={() => {
                    setstatusmodal(false);
                  }}>
                  <Text style={{ color: colors.black, fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: metrics.HEIGHT * 0.06,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: '5%',
    borderColor: '#393E46',
    backgroundColor: '#393E46',
  },
  ainput: {
    height: metrics.HEIGHT * 0.1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: '5%',
    borderColor: '#393E46',
    backgroundColor: '#393E46',
  },
  focusedInput: {
    borderColor: '#00ADB5', // Focused border color
  },
  txt: {
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: '1%',
    color: '#00c2cc',
    fontSize: 17,
    fontWeight: '600',
  },
  dinput: {
    height: metrics.HEIGHT * 0.06,
    backgroundColor: '#9da4af',
    borderRadius: 12,
    borderColor: '#00ADB5',
  },
  container: {
    marginHorizontal: '3%',
  },
  dropdown: {
    height: 50,
    borderColor: '#9da4af',
    borderWidth: 0.5,
    backgroundColor: colors.themecolor,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: '5%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#9da4af',
    color: '#00ADB5',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    paddingHorizontal: '3%',
    color: '#fff',
    fontSize: 15,
  },
  selectedTextStyle: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: '3%',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  constyle: {
    borderColor: '#393E46',
    backgroundColor: colors.themecolor,
    borderRadius: 10,
    padding: '3%',
  },
  itemconstyle: {
    backgroundColor: '#9da4af',
    borderColor: '#9da4af',
    borderRadius: 10,
    color: '#000',
    height: metrics.HEIGHT * 0.065,
    marginVertical: '1%',
  },
});

export default TaskManager;
