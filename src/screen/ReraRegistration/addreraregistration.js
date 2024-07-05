/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, AsyncStorage, ActivityIndicator} from 'react-native';

import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native';
import moment from 'moment';
import {TouchableOpacity} from 'react-native';
import metrics from '../../utils/metrics';
import colors from '../../utils/colors';
import Backcom from '../../component/backcom';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import fonts from '../../utils/fonts';
import {Modal} from 'react-native';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import axios from 'axios';
import {
  ACCEPT_HEADER,
  creatematerial_url,
  rerachilddelete_url,
  rerachildupdate_url,
  reracode_url,
  reracreate_url,
  reraupdate_url,
  updatematerial_url,
} from '../../utils/baseurl';
import Toast from 'react-native-simple-toast';
import {useLoginContext} from '../../context/login_context';
import {useBasicContext} from '../../context/basic_context';

const AddReraRegistration = props => {
  const {setLogout} = useLoginContext();
  const [isEdit, setisEdit] = useState(false);
  const [id, setId] = useState('');
  const [isDatePickerdue, setDatePickerdue] = useState(false);
  const [getdatedue, setdatedue] = useState('');
  const [sectionmodel, setsectionmodel] = useState(false);
  const [getsubject, setsubject] = useState('');
  const [get_array, set_array] = useState([]);
  const [item_name, setitemname] = useState('');
  const [qty, setqty] = useState('');
  const [price, setprice] = useState('');
  const [gst, setgst] = useState('');
  const [gstPercentage, setGstPercentage] = useState(0);
  const [gst_amount, setgstamount] = useState(0);
  const [amount, setamount] = useState(0);
  const [discount, setdiscount] = useState('');
  const [damount, setdamount] = useState('');
  const [editData, SetEditdata] = useState();

  const [isDatePickerinvoice, setDatePickerinvoice] = useState(false);
  const [getdateinvoice, setdateinvoicee] = useState('');

  useEffect(() => {
    const item = props.route.params.item;
    if (item !== '') {
      SetEditdata(item);
      setdatequatation(item.invoice_date);
      setdatequatation1(item.due_date);
      setValue1(item.client_id);
      SetBillAdd(item.bill_address);
      set_array(item.rera_child);
      setId(item.id);
      setdamount(item.discount_price);
      setDiscountPercentage(item.discount);
      console.log(JSON.stringify(item, 0, 2));
      setisEdit(true);
    } else {
      setisEdit(false);
    }
  }, [props]);

  const showDatePickerinvoice = () => {
    setDatePickerinvoice(true);
  };

  const hideDatePickerinvoice = () => {
    setDatePickerinvoice(false);
  };
  const handleConfirminvoice = date => {
    hideDatePickerinvoice();
  };

  const addvalue = async () => {
    if (item_name === '') {
      Toast.show('Enter Item Name');
    } else if (qty === '') {
      Toast.show('Enter Qty');
    } else if (price === '') {
      Toast.show('Enter Price');
    } else if (gst === '') {
      Toast.show('Enter GST');
    } else {
      const obj = {
        item_name: item_name,
        qty: qty,
        price: price,
        gst: gst,
        gst_amount: gst_amount,
        amount: amount,
      };
      console.log('dataobj --->', obj);
      const data = obj;
      setsectionmodel(false);
      await set_array([...get_array, data]);
      await setitemname('');
      await setqty('');
      await setprice('');
      await setgst('');
      await setgstamount('');
      await setamount(0);
      await setGstPercentage(0);
    }
  };

  const removePerson = index => {
    let filteredArray = get_array.filter((item, i) => i !== index);
    set_array(filteredArray);
  };

  const showDatePickerdue = () => {
    setDatePickerdue(true);
  };

  const hideDatePickerdue = () => {
    setDatePickerinvoice(false);
  };
  const handleConfirmdue = date => {
    setdatedue(date);
    hideDatePickerdue();
  };

  const [focusedInputs, setFocusedInputs] = useState(false);
  const [focusedInputs1, setFocusedInputs1] = useState(false);
  const [focusedInputs2, setFocusedInputs2] = useState(false);
  const [focusedInputs3, setFocusedInputs3] = useState(false);
  const [focusedInputs4, setFocusedInputs4] = useState(false);
  const [focusedInputs5, setFocusedInputs5] = useState(false);

  const handleFocus = () => {
    setFocusedInputs(true);
  };

  const handleBlur = () => {
    setFocusedInputs(false);
  };

  const handleFocus1 = () => {
    setFocusedInputs1(true);
  };

  const handleBlur1 = () => {
    setFocusedInputs1(false);
  };

  const handleFocus2 = () => {
    setFocusedInputs2(true);
  };

  const handleBlur2 = () => {
    setFocusedInputs2(false);
  };

  const handleFocus3 = () => {
    setFocusedInputs3(true);
  };

  const handleBlur3 = () => {
    setFocusedInputs3(false);
  };

  const handleFocus4 = () => {
    setFocusedInputs4(true);
  };

  const handleBlur4 = () => {
    setFocusedInputs4(false);
  };

  const handleFocus5 = () => {
    setFocusedInputs5(true);
  };

  const handleBlur5 = () => {
    setFocusedInputs5(false);
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

  const rinputs = [
    {label: 'Invoice Header', placeholder: 'Enter Invoice Header'},
    {label: 'GST No', placeholder: 'Enter GST No'},
  ];

  const inputs = [{label: 'Invoice No'}];

  const ainputs = [
    {label: 'Discout (%)', placeholder: 'Enter Discout (%)'},
    {label: 'Discout Amount', placeholder: 'Enter Discout Amount'},
    {label: 'Total Amount', placeholder: 'Enter Total Amount'},
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
        />
      </>
    ));
  };

  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);

  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);

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

  const calculateAmount = (pprice, quantity, pgstPercentage) => {
    const parsedPPrice = parseFloat(pprice);
    const parsedQuantity = parseFloat(quantity);
    const parsedPGSTPercentage = parseFloat(pgstPercentage);

    const calculatedAmount = parsedPPrice * parsedQuantity;

    // Set the value of pgstPercentage to gst if it is NaN
    const finalPGSTPercentage = isNaN(parsedPGSTPercentage)
      ? parseFloat(gst)
      : parsedPGSTPercentage;

    const gst_amount = (calculatedAmount * finalPGSTPercentage) / 100;

    setgstamount(gst_amount.toString());
    setamount((calculatedAmount + gst_amount).toString());
  };
  const totalAmount = get_array.reduce((accumulator, element) => {
    const aamount = parseFloat(element.amount);
    return accumulator + aamount;
  }, 0);

  useEffect(() => {
    setTotalAmount(totalAmount);
  }, [totalAmount]);

  const [TotalAmount, setTotalAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const calculateDiscountedAmount = (amount, discountPercentage) => {
    const discountAmount =
      (parseFloat(amount) * parseFloat(discountPercentage)) / 100;
    setdamount(discountAmount);
    return parseFloat(amount) - discountAmount;
  };

  useEffect(() => {
    if (discountPercentage === '' || NaN || 0) {
      setTotalAmount(totalAmount);
      setdamount(0);
      setDiscountPercentage(0);
    } else {
      const discountedAmount = calculateDiscountedAmount(
        totalAmount,
        discountPercentage,
      );
      setTotalAmount(discountedAmount);
    }
  }, [discountPercentage, totalAmount]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      Reracode();
      GetClint(props);
    });
    // eslint-disable-next-line no-lone-blocks
    {
      isEdit ? null : unsubscribe;
    }
  }, [props]);

  const {GetTypeget, type_array, GetClint, clint_array} = useBasicContext();
  const [getreracode, SetReraCode] = useState('');
  const [billadd, SetBillAdd] = useState('');
  const Reracode = async () => {
    var Token = await AsyncStorage.getItem('token');
    axios
      .get(reracode_url, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        console.log('resss', res.data);
        SetReraCode(res.data.data);
      })
      .catch(err => {
        console.log('errr', err);
      });
  };

  const [load, SetLoad] = useState(false);

  const create_rera = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    const formdata = new FormData();
    formdata.append(
      'invoice_date',
      moment(getdatequatation).format('YYYY-MM-DD'),
    );
    formdata.append('due_date', moment(getdatequatation1).format('YYYY-MM-DD'));
    formdata.append('client_id', value1);
    formdata.append('bill_address', billadd);
    formdata.append('discount', discountPercentage);
    formdata.append('discount_price', damount);
    for (let i = 0; i < get_array.length; i++) {
      formdata.append('item_name[' + i + ']', get_array[i].item_name);
      formdata.append('qty[' + i + ']', get_array[i].qty);
      formdata.append('price[' + i + ']', get_array[i].price);
      formdata.append('gst[' + i + ']', get_array[i].gst);
      formdata.append('gst_amount[' + i + ']', get_array[i].gst_amount);
      formdata.append('amount[' + i + ']', get_array[i].amount);
    }

    console.log('formdata-->', formdata);
    axios
      .post(reracreate_url, formdata, {
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

  const editrera = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    const formdata = new FormData();
    formdata.append('id', id);
    formdata.append(
      'invoice_date',
      moment(getdatequatation).format('YYYY-MM-DD'),
    );
    formdata.append('due_date', moment(getdatequatation1).format('YYYY-MM-DD'));
    formdata.append('client_id', value1);
    formdata.append('bill_address', billadd);
    formdata.append('discount', discountPercentage);
    formdata.append('discount_price', damount);

    console.log('formdata edit-->', formdata);
    axios
      .post(reraupdate_url, formdata, {
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

  const [childid, setchildid] = useState('');

  const detelechild = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    const formdata = new FormData();
    formdata.append('id', childid);

    console.log('formdata delete child-->', formdata);
    axios
      .post(rerachilddelete_url, formdata, {
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
          setchildid('');
        } else {
          null;
          SetLoad(false);
        }
      })
      .catch(err => {
        console.log('errr', err);
      });
  };

  const childupdate = async () => {
    SetLoad(true);
    var Token = await AsyncStorage.getItem('token');
    const formdata = new FormData();
    formdata.append('id', childid);
    formdata.append('item_name', item_name);
    formdata.append('qty', qty);
    formdata.append('price', price);
    formdata.append('gst', gst);
    formdata.append('gst_amount', gst_amount);
    formdata.append('amount', amount);
    console.log('formdata childupdate-->', formdata);
    axios
      .post(rerachildupdate_url, formdata, {
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
  return (
    <View style={{flex: 1, backgroundColor: colors.themecolor}}>
      <StatusBar backgroundColor={colors.themecolor} />
      <Backcom
        title={isEdit ? 'Edit Rera Registration' : 'Add Rera Registration'}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: '20%',
        }}>
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
        <View style={{marginHorizontal: '3%'}}>
          <Text style={styles.txt}>Invoice No.</Text>
          <View style={[styles.input, {justifyContent: 'center'}]}>
            <Text
              style={{
                color: colors.white,
                fontSize: 16,
              }}>
              {getreracode}
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Text style={styles.txt}>Invoice Date</Text>
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
        <View style={{marginHorizontal: '3%'}}>
          <Text style={styles.txt}>Due Date</Text>
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
          <Text style={styles.txt}>Client</Text>
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
            data={clint_array}
            activeColor="#00ADB5"
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder={!isFocus1 ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value1}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setValue1(item.id);
              setIsFocus1(false);
            }}
          />
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Text style={styles.txt}>Billing Address</Text>
          <TextInput
            style={[styles.ainput, focusedInputs3 && styles.focusedInput]}
            onFocus={() => handleFocus3()}
            onBlur={() => handleBlur3()}
            placeholder={'Enter Billing Address'}
            placeholderTextColor={'#979ca4'}
            multiline={true}
            numberOfLines={3}
            onChangeText={val => {
              SetBillAdd(val);
            }}
            value={billadd}
          />
        </View>

        <View style={{marginTop: 10}}>
          <FlatList
            data={get_array}
            style={{marginTop: 10}}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <LinearGradient
                  animation="slideInLeft"
                  colors={['#393E46', '#393E46', '#393E46']}
                  style={{
                    padding: '3%',
                    elevation: 2,
                    borderRadius: 13,
                    backgroundColor: '#393E46',
                    marginTop: '3%',
                    marginBottom: '2%',
                    flexDirection: 'row',
                    // width: '90%',
                    // alignItems: 'flex-start',
                    // alignSelf: 'center',
                    marginHorizontal: '3%',
                  }}>
                  <View style={{width: '100%'}}>
                    <View
                      style={{
                        right: '1%',
                        position: 'absolute',
                        flexDirection: 'row',
                      }}>
                      <MaterialIcons
                        name="edit"
                        color={'#00ADB5'}
                        size={26}
                        onPress={() => {
                          setchildid(item.id);
                          setsectionmodel(true);
                          setitemname(item.item_name);
                          setqty(item.qty);
                          setprice(item.price);
                          setgst(item.gst);
                          setgstamount(item.gst_amount);
                          setamount(item.amount);
                        }}
                      />
                      <View style={{width: metrics.WIDTH * 0.08}} />
                      <Ionicons
                        name="close-circle-sharp"
                        size={28}
                        color={'#00ADB5'}
                        style={{}}
                        onPress={() => {
                          setchildid(item.id);
                          {
                            isEdit ? detelechild() : removePerson(index);
                          }
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        // backgroundColor: "red",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}>
                      <View style={{}}>
                        <Text
                          style={{
                            color: '#00ADB5',
                            fontSize: 16,
                            fontFamily: fonts.NeueHaasDisplayRomandark,
                          }}>
                          Item Name
                        </Text>
                        <Text
                          style={{
                            color: colors.white,
                            fontWeight: '500',
                            marginTop: 5,
                          }}>
                          {item.item_name}
                        </Text>
                      </View>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontSize: 16,
                          fontFamily: fonts.NeueHaasDisplayRomandark,
                        }}>
                        Qty
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        {item.qty}
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontSize: 16,
                          fontFamily: fonts.NeueHaasDisplayRomandark,
                        }}>
                        Price
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        {item.price}
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontSize: 16,
                          fontFamily: fonts.NeueHaasDisplayRomandark,
                        }}>
                        GST (%)
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        {item.gst}
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontSize: 16,
                          fontFamily: fonts.NeueHaasDisplayRomandark,
                        }}>
                        GST Amount
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        {item.gst_amount}
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          color: '#00ADB5',
                          fontSize: 16,
                          fontFamily: fonts.NeueHaasDisplayRomandark,
                        }}>
                        Amount
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontWeight: '500',
                          marginTop: 5,
                        }}>
                        {item.amount}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              );
            }}
          />
        </View>
        {get_array.length == 0 ? null : (
          <>
            <View style={{marginHorizontal: '3%'}}>
              <Text style={styles.txt}>Discount (%)</Text>
              <TextInput
                style={[styles.input, focusedInputs2 && styles.focusedInput]}
                onFocus={() => handleFocus2()}
                onBlur={() => handleBlur2()}
                placeholder={'Enter Discont'}
                value={discountPercentage.toString()}
                placeholderTextColor={'#979ca4'}
                onChangeText={text => setDiscountPercentage(text)}
              />
              <Text style={styles.txt}>Discount Amount</Text>
              <TextInput
                style={[styles.input, focusedInputs4 && styles.focusedInput]}
                onFocus={() => handleFocus4()}
                onBlur={() => handleBlur4()}
                placeholder={'Enter Discont Amount'}
                value={damount.toString()}
                editable={false}
                placeholderTextColor={'#979ca4'}
              />
              <Text style={styles.txt}>Total Amount</Text>
              <TextInput
                style={[styles.input, focusedInputs5 && styles.focusedInput]}
                onFocus={() => handleFocus5()}
                onBlur={() => handleBlur5()}
                value={TotalAmount.toString()}
                placeholder={'Enter Discont Amount'}
                placeholderTextColor={'#979ca4'}
                editable={false}
              />
            </View>
          </>
        )}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 20,
          width: '90%',
          marginHorizontal: '5%',
        }}>
        {get_array == 0 ? null : (
          <TouchableOpacity
            onPress={() => {
              isEdit ? editrera() : create_rera();
            }}
            style={{
              borderRadius: 30,
              backgroundColor: '#00ADB5',
              paddingHorizontal: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // paddingTop: '5%',
              // paddingBottom: '5%',
              width: '35%',
            }}>
            {load === true ? (
              <ActivityIndicator color={colors.white} size="small" />
            ) : (
              <>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={25}
                  color={'#fff'}
                />

                <Text style={{color: colors.white}}>Submit</Text>
              </>
            )}
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            setsectionmodel(true);
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00ADB5',
            width: 50,
            height: 50,
            borderRadius: 50,
            // right: 15,
          }}>
          <AntDesign name="plus" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={sectionmodel}
        onRequestClose={() => {
          setsectionmodel(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: colors.themecolor,
          }}>
          <ScrollView
            style={{
              backgroundColor: colors.themecolor,
              width: metrics.WIDTH * 1,
            }}>
            <View
              style={{
                marginTop: '5%',
                marginRight: '5%',
                alignItems: 'flex-end',
              }}>
              <Ionicons
                name="close-circle-sharp"
                size={30}
                color={'#00ADB5'}
                style={{}}
                onPress={() => {
                  setsectionmodel(false);
                }}
              />
            </View>
            <View style={styles.boxtaxview} />
            <View style={{marginTop: 10, marginHorizontal: '5%'}}>
              <Text style={{color: '#00ADB5', fontSize: 15}}>Item Name :</Text>
            </View>
            <View
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                alignItems: 'center',
                marginHorizontal: '5%',
                borderRadius: 13,
                backgroundColor: '#393E46',
              }}>
              <TextInput
                style={{
                  width: '90%',
                  color: '#fff',
                  backgroundColor: '#393E46',
                }}
                placeholder="Enter Item Name"
                placeholderTextColor={'#979ca4'}
                onChangeText={text => {
                  setitemname(text);
                }}
                value={item_name}
              />
            </View>
            <View style={{marginTop: 10, marginHorizontal: '5%'}}>
              <Text style={{color: '#00ADB5', fontSize: 15}}>Quantity :</Text>
            </View>
            <View
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                alignItems: 'center',
                marginHorizontal: '5%',
                borderRadius: 13,
                backgroundColor: '#393E46',
              }}>
              <TextInput
                style={{
                  width: '90%',
                  color: '#fff',
                  backgroundColor: '#393E46',
                }}
                placeholderTextColor={'#979ca4'}
                placeholder="Enter Quantity"
                onChangeText={text => {
                  setqty(text);
                  calculateAmount(price, text);
                }}
                keyboardType="number-pad"
                value={qty}
              />
            </View>
            <View style={{marginTop: 10, marginHorizontal: '5%'}}>
              <Text style={{color: '#00ADB5', fontSize: 15}}>Price :</Text>
            </View>
            <View
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                alignItems: 'center',
                marginHorizontal: '5%',
                borderRadius: 13,
                backgroundColor: '#393E46',
              }}>
              <TextInput
                style={{
                  width: '90%',
                  color: '#fff',
                  backgroundColor: '#393E46',
                }}
                placeholderTextColor={'#979ca4'}
                placeholder="Enter Price"
                onChangeText={text => {
                  setprice(text);
                  calculateAmount(text, qty);
                }}
                keyboardType="number-pad"
                value={price}
              />
            </View>
            <View style={{marginTop: 10, marginHorizontal: '5%'}}>
              <Text style={{color: '#00ADB5', fontSize: 15}}>GST(%) :</Text>
            </View>
            <View
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                alignItems: 'center',
                marginHorizontal: '5%',
                borderRadius: 13,
                backgroundColor: '#393E46',
              }}>
              <TextInput
                style={{
                  width: '90%',
                  color: '#fff',
                  backgroundColor: '#393E46',
                }}
                placeholderTextColor={'#979ca4'}
                placeholder="Enter GST(%)"
                onChangeText={text => {
                  setgst(text);
                  setGstPercentage(text);
                  calculateAmount(price, qty, text);
                }}
                keyboardType="number-pad"
                value={gst}
              />
            </View>
            <View style={{marginTop: 10, marginHorizontal: '5%'}}>
              <Text style={{color: '#00ADB5', fontSize: 15}}>GSt Amount :</Text>
            </View>
            <View
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                paddingTop: '3%',
                paddingBottom: '3%',
                marginHorizontal: '5%',
                borderRadius: 13,
                backgroundColor: '#393E46',
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 16,
                  left: '5%',
                }}>
                {gst_amount}
              </Text>
            </View>
            <View style={{marginTop: '1%', marginHorizontal: '5%'}}>
              <Text style={{color: '#00ADB5', fontSize: 15}}>Amount :</Text>
            </View>
            <View
              style={{
                marginTop: '2%',
                marginBottom: '2%',
                paddingTop: '3%',
                paddingBottom: '3%',
                marginHorizontal: '5%',
                borderRadius: 13,
                backgroundColor: '#393E46',
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 16,
                  left: '5%',
                }}>
                {amount}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                isEdit ? childupdate() : addvalue();
              }}
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
      </Modal>
    </View>
  );
};

export default AddReraRegistration;
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
    borderColor: '#00ADB5',
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
