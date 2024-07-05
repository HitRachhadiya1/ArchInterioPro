/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../../utils/colors';
import Backcom from '../../../component/backcom';
import fonts from '../../../utils/fonts';
import {Dropdown} from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import metrics from '../../../utils/metrics';

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

const CreateMember = props => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  const [getmember, setmember] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: colors.themecolor}}>
      <Backcom title="Create Member" navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.txt}>Add Member</Text>
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
      </View>
      <View
        style={{
          marginTop: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '10%',
          paddingHorizontal: '15%',
        }}>
        <TouchableOpacity style={{backgroundColor: '#00ADB5', borderRadius: 7}}>
          <Text
            style={{
              color: '#fff',
              paddingHorizontal: '13%',
              paddingVertical: '3.5%',
              fontWeight: '500',
              fontSize: 18,
            }}>
            Add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#393E46',
            borderRadius: 7,
            borderWidth: 0.7,
            borderColor: '#00ADB5',
          }}>
          <Text
            style={{
              color: '#00ADB5',
              paddingHorizontal: '9.5%',
              paddingVertical: '3.5%',
              fontWeight: '500',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
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

export default CreateMember;
