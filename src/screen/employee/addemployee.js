/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import colors from '../../utils/colors';
import Backcom from '../../component/backcom';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import metrics from '../../utils/metrics';
import * as Animatable from 'react-native-animatable';
import {Dropdown} from 'react-native-element-dropdown';
import fonts from '../../utils/fonts';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Addemployee = props => {
  const [value, setValue] = useState(null);

  const [isDatePickerquatation, setDatePickerquatation] = useState(false);
  const [getdatequatation, setdatequatation] = useState('');
  const showDatePickerquatation = () => {
    setDatePickerquatation(true);
  };

  const hideDatePickerquatation = () => {
    setDatePickerquatation(false);
  };

  const handleConfirmquatation = date => {
    setdatequatation(date);
    hideDatePickerquatation();
  };

  const [isDatePickerquatation1, setDatePickerquatation1] = useState(false);
  const [getdatequatation1, setdatequatation1] = useState('');
  const showDatePickerquatation1 = () => {
    setDatePickerquatation1(true);
  };

  const hideDatePickerquatation1 = () => {
    setDatePickerquatation1(false);
  };

  const handleConfirmquatation1 = date => {
    setdatequatation1(date);
    hideDatePickerquatation1();
  };

  return (
    <View style={{backgroundColor: colors.themecolor, flex: 1}}>
      <Backcom title="Add Employee" navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: '20%',
        }}>
        <View style={{marginTop: 2, marginHorizontal: '4%'}}>
          <Text
            style={{
              marginTop: '5%',
              marginBottom: '2%',
              marginLeft: '1%',
              color: '#00c2cc',
              fontSize: 22,
              fontWeight: '600',
            }}>
            General Details{' '}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.txt}>Franchise</Text>
          <Dropdown
            style={[styles.dropdown]}
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
            placeholder={'Select item'}
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>Name </Text>
        </View>
        <View
          style={{
            marginTop: '2%',
            marginBottom: '2%',

            // paddingTop: metrics.HEIGHT * 0.01,
            // paddingBottom: metrics.HEIGHT * 0.01,
            alignItems: 'center',
            marginHorizontal: '3%',
            borderRadius: 5,
            backgroundColor: '#393E46',
          }}>
          <TextInput
            style={{
              width: '90%',
              color: '#fff',

              backgroundColor: '#393E46',
            }}
            multiline
            placeholder="Enter Name"
            placeholderTextColor={colors.gray}
            // onChangeText={text => {
            //   setitemname(text);
            // }}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>Mobile No </Text>
        </View>
        <View
          style={{
            marginTop: '2%',
            marginBottom: '2%',

            // paddingTop: metrics.HEIGHT * 0.01,
            // paddingBottom: metrics.HEIGHT * 0.01,
            alignItems: 'center',
            marginHorizontal: '3%',
            borderRadius: 5,
            backgroundColor: '#393E46',
          }}>
          <TextInput
            style={{
              width: '90%',
              color: '#fff',

              backgroundColor: '#393E46',
            }}
            multiline
            placeholder="Enter Mobile No"
            placeholderTextColor={colors.gray}
            // onChangeText={text => {
            //   setitemname(text);
            // }}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>Email </Text>
        </View>
        <View
          style={{
            marginTop: '2%',
            marginBottom: '2%',

            // paddingTop: metrics.HEIGHT * 0.01,
            // paddingBottom: metrics.HEIGHT * 0.01,
            alignItems: 'center',
            marginHorizontal: '3%',
            borderRadius: 5,
            backgroundColor: '#393E46',
          }}>
          <TextInput
            style={{
              width: '90%',
              color: '#fff',

              backgroundColor: '#393E46',
            }}
            multiline
            placeholder="Enter Email"
            placeholderTextColor={colors.gray}
            // onChangeText={text => {
            //   setitemname(text);
            // }}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>Password </Text>
        </View>
        <View
          style={{
            marginTop: '2%',
            marginBottom: '2%',

            // paddingTop: metrics.HEIGHT * 0.01,
            // paddingBottom: metrics.HEIGHT * 0.01,
            alignItems: 'center',
            marginHorizontal: '3%',
            borderRadius: 5,
            backgroundColor: '#393E46',
          }}>
          <TextInput
            style={{
              width: '90%',
              color: '#fff',

              backgroundColor: '#393E46',
            }}
            multiline
            placeholder="Enter Password"
            placeholderTextColor={colors.gray}
            // onChangeText={text => {
            //   setitemname(text);
            // }}
          />
        </View>
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>Date Of Birth :</Text>
        </View>
        <View
          style={{
            height: metrics.HEIGHT * 0.06,
            borderWidth: 0.5,
            borderColor: '#393E46',
            borderRadius: 5,
            backgroundColor: '#393E46',
            justifyContent: 'center',
            marginHorizontal: '4%',
            marginTop: '2%',
            marginBottom: '2%',
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
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>Date Of Join :</Text>
        </View>
        <View
          style={{
            height: metrics.HEIGHT * 0.06,
            borderWidth: 0.5,
            borderColor: '#393E46',
            borderRadius: 5,
            backgroundColor: '#393E46',
            justifyContent: 'center',
            marginHorizontal: '4%',
            marginTop: '2%',
            marginBottom: '2%',
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
      </ScrollView>
    </View>
  );
};

export default Addemployee;
const styles = StyleSheet.create({
  input: {
    height: metrics.HEIGHT * 0.06,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: '5%',
    borderColor: '#393E46',
    backgroundColor: '#393E46',
    color: colors.white,
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
