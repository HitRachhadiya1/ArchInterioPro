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

const AddVendor = props => {
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  return (
    <View style={{backgroundColor: colors.themecolor, flex: 1}}>
      <Backcom title="Add Vendor" navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: '20%',
        }}>
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
          <Text style={styles.txt}>Country </Text>
        </View>
        <Dropdown
          style={{
            height: 50,
            borderColor: '#393E46',
            borderWidth: 0.5,
            backgroundColor: '#393E46',
            borderRadius: 8,
            paddingHorizontal: 8,
            marginHorizontal: '3%',
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.constyle}
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
          value={value1}
          onChange={item => {
            setValue1(item.value);
          }}
        />
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>State </Text>
        </View>
        <Dropdown
          style={{
            height: 50,
            borderColor: '#393E46',
            borderWidth: 0.5,
            backgroundColor: '#393E46',
            borderRadius: 8,
            paddingHorizontal: 8,
            marginHorizontal: '3%',
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.constyle}
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
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
        />
        <View style={{marginTop: 10, marginHorizontal: '4%'}}>
          <Text style={styles.txt}>City </Text>
        </View>
        <Dropdown
          style={{
            height: 50,
            borderColor: '#393E46',
            borderWidth: 0.5,
            backgroundColor: '#393E46',
            borderRadius: 8,
            paddingHorizontal: 8,
            marginHorizontal: '3%',
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.constyle}
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
          value={value3}
          onChange={item => {
            setValue3(item.value);
          }}
        />
        <TouchableOpacity
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
            SUBMIT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddVendor;
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
