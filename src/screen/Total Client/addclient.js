/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Backcom from '../../component/backcom';
import colors from '../../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import metrics from '../../utils/metrics';
import fonts from '../../utils/fonts';
import {Dropdown} from 'react-native-element-dropdown';

const Addclient = props => {
  const [gettype, settype] = useState('');
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const [focusedInputs, setFocusedInputs] = useState([]);
  const [focusedInputs1, setFocusedInputs1] = useState([]);
  const [focusedInputs2, setFocusedInputs2] = useState([]);

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

  const handleFocus = index => {
    setFocusedInputs(prevFocusedInputs => {
      const updatedFocusedInputs = [...prevFocusedInputs];
      updatedFocusedInputs[index] = true;
      return updatedFocusedInputs;
    });
  };

  const handleBlur = index => {
    setFocusedInputs(prevFocusedInputs => {
      const updatedFocusedInputs = [...prevFocusedInputs];
      updatedFocusedInputs[index] = false;
      return updatedFocusedInputs;
    });
  };

  const handleFocus1 = index => {
    setFocusedInputs1(prevFocusedInputs => {
      const updatedFocusedInputs = [...prevFocusedInputs];
      updatedFocusedInputs[index] = true;
      return updatedFocusedInputs;
    });
  };

  const handleBlur1 = index => {
    setFocusedInputs1(prevFocusedInputs => {
      const updatedFocusedInputs = [...prevFocusedInputs];
      updatedFocusedInputs[index] = false;
      return updatedFocusedInputs;
    });
  };

  const handleFocus2 = index => {
    setFocusedInputs2(prevFocusedInputs => {
      const updatedFocusedInputs = [...prevFocusedInputs];
      updatedFocusedInputs[index] = true;
      return updatedFocusedInputs;
    });
  };

  const handleBlur2 = index => {
    setFocusedInputs2(prevFocusedInputs => {
      const updatedFocusedInputs = [...prevFocusedInputs];
      updatedFocusedInputs[index] = false;
      return updatedFocusedInputs;
    });
  };

  const rinputs = [
    {label: 'Name', placeholder: 'Enter Name'},
    {label: 'Email', placeholder: 'Enter Email'},
    {label: 'Password', placeholder: 'Enter Password'},
    {label: 'Contact', placeholder: 'Enter Contact'},
    {label: 'Contact Person Name', placeholder: 'Enter Contact Person Name'},
    {
      label: 'Contact Person Number',
      placeholder: 'Enter Contact Person Number',
    },
  ];

  const inputs = [
    {label: 'Client Location', placeholder: 'Enter Client Location'},
    {label: 'Project Location', placeholder: 'Enter Project Location'},
    {label: 'Referance', placeholder: 'Enter Referance'},
    {label: 'Company', placeholder: 'Enter Company'},
    {label: 'Contact GST No.', placeholder: 'Enter GST No.'},
  ];

  const ainputs = [
    {label: 'Address', placeholder: 'Enter Address'},
    {label: 'Billing Address', placeholder: 'Enter Billing Address'},
  ];

  const dinputs = [
    {label: 'Country', placeholder: 'Select Country'},
    {label: 'State', placeholder: 'Select State'},
    {label: 'City', placeholder: 'Select City'},
  ];

  const renderRInputs = () => {
    return rinputs.map((input, index) => (
      <>
        <Text style={styles.txt}>{input.label}</Text>
        <TextInput
          key={index}
          style={[styles.input, focusedInputs[index] && styles.focusedInput]}
          onFocus={() => handleFocus(index)}
          onBlur={() => handleBlur(index)}
          placeholder={input.placeholder}
          placeholderTextColor={colors.gray}
        />
      </>
    ));
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <>
        <Text style={styles.txt}>{input.label}</Text>
        <TextInput
          key={index}
          style={[styles.input, focusedInputs1[index] && styles.focusedInput]}
          onFocus={() => handleFocus1(index)}
          onBlur={() => handleBlur1(index)}
          placeholder={input.placeholder}
          placeholderTextColor={colors.gray}
        />
      </>
    ));
  };

  const renderAInputs = () => {
    return ainputs.map((input, index) => (
      <>
        <Text style={styles.txt}>{input.label}</Text>
        <TextInput
          key={index}
          style={[styles.ainput, focusedInputs2[index] && styles.focusedInput]}
          onFocus={() => handleFocus2(index)}
          onBlur={() => handleBlur2(index)}
          placeholder={input.placeholder}
          placeholderTextColor={colors.gray}
          multiline={true}
          numberOfLines={3}
        />
      </>
    ));
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.themecolor}}>
      <Backcom title="Add Client" navigation={props.navigation} />
      <ScrollView>
        <View style={{marginHorizontal: '3%'}}>{renderRInputs()}</View>
        <View style={styles.container}>
          <Text style={styles.txt}>Country</Text>
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
        <View style={styles.container}>
          <Text style={styles.txt}>State</Text>
          <Dropdown
            style={[styles.dropdown, isFocus1 && {borderColor: '#00ADB5'}]}
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
        <View style={styles.container}>
          <Text style={styles.txt}>City</Text>
          <Dropdown
            style={[styles.dropdown, isFocus2 && {borderColor: '#00ADB5'}]}
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
        <View style={{marginHorizontal: '3%'}}>{renderInputs()}</View>
        <View style={{marginHorizontal: '3%'}}>{renderAInputs()}</View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00ADB5',
            alignSelf: 'center',
            marginBottom: '10%',
            borderRadius: 10,
            marginTop: '10%',
          }}>
          <Text
            style={{
              color: '#fff',
              paddingHorizontal: '10%',
              paddingVertical: '2.5%',
              fontWeight: '700',
              fontSize: 18,
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
    color: colors.white,
  },
  ainput: {
    height: metrics.HEIGHT * 0.1,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: '5%',
    borderColor: '#393E46',
    backgroundColor: '#393E46',
    color: colors.white,
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
export default Addclient;
