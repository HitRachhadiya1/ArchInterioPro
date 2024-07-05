/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView, AsyncStorage } from 'react-native';
import Backcom from '../../component/backcom';
import { StyleSheet } from 'react-native';
import metrics from '../../utils/metrics';
import colors from '../../utils/colors';
import { TextInput } from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DocumentPicker, {
  isCancel,
  isInProgress,
} from 'react-native-document-picker';
import { useEffect } from 'react';
import axios from 'axios';
import { ACCEPT_HEADER, taskmanagercreate_url, getproject_url, get_milestone, getclient_url, gettype_url, get_vendor } from '../../utils/baseurl';
import Toast from 'react-native-simple-toast';
import { useLoginContext } from '../../context/login_context';

const typ = [
  { label: 'Office', value: '1' },
  { label: 'Project', value: '2' },
];

const prio = [
  { label: 'High', value: '1' },
  { label: 'Medimum', value: '2' },
  { label: 'Low', value: '3' },
];

const ate = [
  { label: 'High', value: '1' },
  { label: 'Medimum', value: '2' },
  { label: 'Low', value: '3' },
];

const AddTaskm = props => {

  const { setLogout } = useLoginContext();

  const [value4, setValue4] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [isFocus5, setIsFocus5] = useState(false);
  const [isFocus6, setIsFocus6] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);

  const [focusedInputs1, setFocusedInputs1] = useState(false);

  const handleFocus1 = () => {
    setFocusedInputs1(true);
  };

  const handleBlur1 = () => {
    setFocusedInputs1(false);
  };

  const [isDatePickerquatation, setDatePickerquatation] = useState(false);
  const [isDatePickerquatation1, setDatePickerquatation1] = useState(false);
  const [getdatequatation, setdatequatation] = useState('');
  const [getdatequatation1, setdatequatation1] = useState('');

  const showDatePickerquatation = () => {
    setDatePickerquatation(true);
  };

  const hideDatePickerquatation = () => {
    setDatePickerquatation(false);
  };

  const showDatePickerquatation1 = () => {
    setDatePickerquatation1(true);
  };

  const hideDatePickerquatation1 = () => {
    setDatePickerquatation1(false);
  };

  const handleConfirmquatation = date => {
    setdatequatation(date);
    hideDatePickerquatation();
  };

  const handleConfirmquatation1 = date => {
    setdatequatation1(date);
    hideDatePickerquatation1();
  };

  const [focusedInputs3, setFocusedInputs3] = useState(false);

  const handleFocus3 = () => {
    setFocusedInputs3(true);
  };

  const handleBlur3 = () => {
    setFocusedInputs3(false);
  };

  const [result, setResult] = React.useState();

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = err => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const [isload, SetLoad] = useState(false);

  const [type, Settype] = useState(false);
  const [name, Setname] = useState(false);
  const [priority, Setpriority] = useState(false);
  const [assignedemp, Setassignedemp] = useState(false);
  const [description, Setdescription] = useState(false);
  const [proid, Setproid] = useState(false);
  const [assignedvendor, Setassignedvendor] = useState(false);
  const [milestoneid, Setmilestoneid] = useState(false);

  const [projectname, SetProjectName] = useState([]);
  const [getmilestoned, Setmilestoned] = useState([]);
  const [getemployeed, Setemployeed] = useState([]);
  const [getvendord, Setvendord] = useState([]);

  const [isEdit, setisEdit] = useState(false);

  useEffect(() => {
    const item = props.route.params.item;
    if (item !== '') {
      setValue1(item.type);
      Setname(item.name);
      setdatequatation(item.start_date);
      setdatequatation1(item.end_date);
      setValue2(item.priority);
      setValue3(item.assigned_emp);
      Setdescription(item.description);
      setValue4(item.project);
      setValue5(item.milestones);
      setValue6(item.vendor);
      console.log(JSON.stringify(item, 0, 2));
      setisEdit(true);
    } else {
      setisEdit(false);
    }
  }, [props]);

  const Createtaskmanager = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    const formdata = new FormData();
    formdata.append('type', value1);
    formdata.append('name', name);
    formdata.append(
      'start_date',
      moment(getdatequatation).format('YYYY-MM-DD'),
    );
    formdata.append('end_date', moment(getdatequatation1).format('YYYY-MM-DD'));
    formdata.append('priority', value2);
    formdata.append('assigned_emp', value3);
    formdata.append('pro_id', value4);
    formdata.append('assigned_vendor', value5);
    formdata.append('milestone_id', value6);
    formdata.append('description', description);
    // formdata.append('pro_id', proid);
    // formdata.append('assigned_vendor', assignedvendor);
    // formdata.append('milestone_id', milestoneid);

    console.log('formdata-->', formdata);
    axios
      .post(taskmanagercreate_url, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        console.log('resss', res.data);
        if (res.data.success == 1) {
          Toast.show(res.data.message);
          props.navigation.goBack(null);
          SetLoad(false);
        } else {
          null;
          SetLoad(false);
        }
      })
      .catch(err => {
        console.log('errr', err);
      });
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getproject();
      getmilestone();
      getemployee();
      getvendor();
    });
    return unsubscribe;
  }, [props]);

  const getproject = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    axios
      .get(getproject_url, {
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
          // console.log('getproject----------------',JSON.stringify(res.data.data, 0, 2));
          SetProjectName(res.data.data);
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

  const getmilestone = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    axios
      .get(get_milestone, {
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
          // console.log('getmilestone----------------',JSON.stringify(res.data.data, 0, 2));
          Setmilestoned(res.data.data);
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

  const getemployee = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    axios
      .get(getclient_url, {
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
          // console.log('getemployee----------------',JSON.stringify(res.data.data, 0, 2));
          Setemployeed(res.data.data);
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

  const getvendor = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    axios
      .get(get_vendor, {
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
          // console.log('getvendor----------------',JSON.stringify(res.data.data, 0, 2));
          Setvendord(res.data.data);
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

  return (
    <View style={{ flex: 1, backgroundColor: colors.themecolor }}>
      <Backcom title={isEdit ? 'Edit Task Manager' : 'Add Task Manager'} navigation={props.navigation} />
      <ScrollView>
        {/* <View style={styles.container}>
          <Text style={styles.txt}>Franchise</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: '#00ADB5'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.constyle}
            dropdownPosition="bottom"
            itemContainerStyle={styles.itemconstyle}
            itemTextStyle={{
              color: '#fff',
            }}
            data={data}
            activeColor="#00ADB5"
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View> */}
        <View style={styles.container}>
          <Text style={styles.txt}>Type</Text>
          <Dropdown
            style={[styles.dropdown, isFocus1 && { borderColor: '#00ADB5' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.constyle}
            dropdownPosition="bottom"
            itemContainerStyle={styles.itemconstyle}
            itemTextStyle={{
              color: '#fff',
            }}
            data={typ}
            activeColor="#00ADB5"
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus1 ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value1}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setValue1(item.value);
              setIsFocus1(false);
            }}
          />
        </View>
        <View style={{ marginHorizontal: '3%' }}>
          <Text style={styles.txt}>Task Name</Text>
          <TextInput
            style={[styles.input, focusedInputs1 && styles.focusedInput]}
            onFocus={() => handleFocus1()}
            onBlur={() => handleBlur1()}
            placeholder={'Enter Task Name'}
            placeholderTextColor={'#979ca4'}
            onChangeText={val => {
              Setname(val);
            }}
            value={name}
          />
        </View>
        {value1 === '2' ?
          <View style={styles.container}>
            <Text style={styles.txt}>Project Name</Text>
            <Dropdown
              style={[styles.dropdown, isFocus4 && { borderColor: '#00ADB5' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.constyle}
              dropdownPosition="bottom"
              itemContainerStyle={styles.itemconstyle}
              itemTextStyle={{
                color: '#fff',
              }}
              data={projectname}
              activeColor="#00ADB5"
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder={!isFocus4 ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value4}
              onFocus={() => setIsFocus4(true)}
              onBlur={() => setIsFocus4(false)}
              onChange={item => {
                setValue4(item.id);
                setIsFocus4(false);
              }}
            />
          </View>
          : null
        }

        {value1 === '2' ?
          <View style={styles.container}>
            <Text style={styles.txt}>Milestone</Text>
            <Dropdown
              style={[styles.dropdown, isFocus5 && { borderColor: '#00ADB5' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.constyle}
              dropdownPosition="bottom"
              itemContainerStyle={styles.itemconstyle}
              itemTextStyle={{
                color: '#fff',
              }}
              data={getmilestoned}
              activeColor="#00ADB5"
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder={!isFocus4 ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value5}
              onFocus={() => setIsFocus5(true)}
              onBlur={() => setIsFocus5(false)}
              onChange={item => {
                setValue5(item.id);
                setIsFocus5(false);
              }}
            />
          </View>
          : null
        }
        <View style={{ marginHorizontal: '3%' }}>
          <Text style={styles.txt}>Start Date</Text>
          <View
            style={{
              height: metrics.HEIGHT * 0.06,
              borderWidth: 0.5,
              borderColor: '#393E46',
              borderRadius: 5,
              backgroundColor: '#393E46',
              justifyContent: 'center',
              // paddingTop: 15,
              // paddingBottom: 15,
            }}>
            <DateTimePickerModal
              isVisible={isDatePickerquatation}
              mode="date"
              onConfirm={handleConfirmquatation}
              onCancel={hideDatePickerquatation}
            />
            <TouchableOpacity onPress={showDatePickerquatation}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.white,
                    alignSelf: 'center',
                    marginHorizontal: '5%',
                  }}>
                  {moment(getdatequatation).format('DD/MM/YYYY') ===
                    'Invalid date'
                    ? 'dd/mm/yyyy'
                    : moment(getdatequatation).format('DD/MM/YYYY')}
                </Text>
                <Fontisto
                  name="date"
                  size={20}
                  style={{
                    marginHorizontal: '5%',
                    color: '#00ADB5',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: '3%' }}>
          <Text style={styles.txt}>End Date</Text>
          <View
            style={{
              height: metrics.HEIGHT * 0.06,
              borderWidth: 0.5,
              borderColor: '#393E46',
              borderRadius: 5,
              backgroundColor: '#393E46',
              justifyContent: 'center',
              // paddingTop: 15,
              // paddingBottom: 15,
            }}>
            <DateTimePickerModal
              isVisible={isDatePickerquatation1}
              mode="date"
              onConfirm={handleConfirmquatation1}
              onCancel={hideDatePickerquatation1}
            />
            <TouchableOpacity onPress={showDatePickerquatation1}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.white,
                    alignSelf: 'center',
                    marginHorizontal: '5%',
                  }}>
                  {moment(getdatequatation1).format('DD/MM/YYYY') ===
                    'Invalid date'
                    ? 'dd/mm/yyyy'
                    : moment(getdatequatation1).format('DD/MM/YYYY')}
                </Text>
                <Fontisto
                  name="date"
                  size={20}
                  style={{
                    marginHorizontal: '5%',
                    color: '#00ADB5',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Priority</Text>
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: '#00ADB5' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.constyle}
            dropdownPosition="bottom"
            itemContainerStyle={styles.itemconstyle}
            itemTextStyle={{
              color: '#fff',
            }}
            data={prio}
            activeColor="#00ADB5"
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value2}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setValue2(item.value);
              setIsFocus2(false);
            }}
          />
        </View>
        <View style={{ marginHorizontal: '3%' }}>
          <Text style={styles.txt}>Attachment</Text>
          <View
            style={{
              height: metrics.HEIGHT * 0.06,
              borderWidth: 1,
              borderRadius: 12,
              paddingHorizontal: '3%',
              borderColor: '#393E46',
              backgroundColor: '#393E46',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {result != null ?
              <Text style={{ color: '#fff' }}>{JSON.stringify(result, null, 2)}</Text>
              :
              <><TouchableOpacity
                onPress={async () => {
                  try {
                    const pickerResult = await DocumentPicker.pickSingle({
                      presentationStyle: 'fullScreen',
                      copyTo: 'cachesDirectory',
                    });
                    setResult([pickerResult]);
                  } catch (e) {
                    handleError(e);
                  }
                }}
                style={{
                  backgroundColor: colors.themecolor,
                  paddingVertical: '2%',
                  borderRadius: 5,
                  width: metrics.WIDTH * 0.5,
                  height: metrics.HEIGHT * 0.04,
                  alignItems: 'center',
                }}>
                <Text style={{ color: '#fff' }}>Choose File</Text>
              </TouchableOpacity><Text
                style={{ color: '#fff', alignSelf: 'center', marginLeft: '5%' }}>
                  No File Choosen
                </Text></>
            }
            {/* <TouchableOpacity
              onPress={async () => {
                try {
                  const pickerResult = await DocumentPicker.pickSingle({
                    presentationStyle: 'fullScreen',
                    copyTo: 'cachesDirectory',
                  });
                  setResult([pickerResult]);
                } catch (e) {
                  handleError(e);
                }
              }}
              style={{
                backgroundColor: colors.themecolor,
                paddingVertical: '2%',
                borderRadius: 5,
                width: metrics.WIDTH * 0.5,
                height: metrics.HEIGHT * 0.04,
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>Choose File</Text>
            </TouchableOpacity>
            <Text
              style={{color: '#fff', alignSelf: 'center', marginLeft: '5%'}}>
              No File Choosen
            </Text> */}
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Assigned To Employee</Text>
          <Dropdown
            style={[styles.dropdown, isFocus3 && { borderColor: '#00ADB5' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={styles.constyle}
            dropdownPosition="bottom"
            itemContainerStyle={styles.itemconstyle}
            itemTextStyle={{
              color: '#fff',
            }}
            data={getemployeed}
            activeColor="#00ADB5"
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder={!isFocus3 ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value3}
            onFocus={() => setIsFocus3(true)}
            onBlur={() => setIsFocus3(false)}
            onChange={item => {
              setValue3(item.id);
              setIsFocus3(false);
            }}
          />
        </View>
        {value1 === '2' ?
          <View style={styles.container}>
            <Text style={styles.txt}>Assigned To Vendor</Text>
            <Dropdown
              style={[styles.dropdown, isFocus6 && { borderColor: '#00ADB5' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.constyle}
              dropdownPosition="bottom"
              itemContainerStyle={styles.itemconstyle}
              itemTextStyle={{
                color: '#fff',
              }}
              data={getvendord}
              activeColor="#00ADB5"
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder={!isFocus6 ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value6}
              onFocus={() => setIsFocus6(true)}
              onBlur={() => setIsFocus6(false)}
              onChange={item => {
                setValue6(item.id);
                setIsFocus6(false);
              }}
            />
          </View>
          : null
        }
        <View style={{ marginHorizontal: '3%' }}>
          <Text style={styles.txt}>Description</Text>
          <TextInput
            style={[styles.ainput, focusedInputs3 && styles.focusedInput]}
            onFocus={() => handleFocus3()}
            onBlur={() => handleBlur3()}
            placeholder={'Enter Description'}
            placeholderTextColor={'#979ca4'}
            multiline={true}
            numberOfLines={3}
            onChangeText={val => {
              Setdescription(val);
            }}
            value={description}
          />
        </View>
        <TouchableOpacity
          onPress={() => Createtaskmanager()}
          style={{
            marginTop: metrics.HEIGHT * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00ADB5',
            marginHorizontal: '5%',
            width: metrics.WIDTH * 0.35,
            alignSelf: 'center',
            paddingTop: metrics.HEIGHT * 0.02,
            paddingBottom: metrics.HEIGHT * 0.02,
            borderRadius: 5,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: '500',
              fontSize: 16,
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    color: '#fff',
  },
  ainput: {
    height: metrics.HEIGHT * 0.1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: '5%',
    borderColor: '#393E46',
    backgroundColor: '#393E46',
    color: '#fff',
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
    backgroundColor: '#393E46',
    borderRadius: 12,
    borderColor: '#00ADB5',
  },
  container: {
    marginHorizontal: '3%',
  },
  dropdown: {
    height: 50,
    borderColor: '#393E46',
    borderWidth: 0.5,
    backgroundColor: '#393E46',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#393E46',
    color: '#00ADB5',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    paddingHorizontal: '3%',
    color: '#9c9fa5',
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
    backgroundColor: '#393E46',
  },
  itemconstyle: {
    backgroundColor: '#393E46',
    borderColor: '#393E46',
    borderRadius: 10,
  },
});

export default AddTaskm;
