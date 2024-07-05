import React, {useContext, useEffect, useReducer, useState} from 'react';
import {AsyncStorage} from 'react-native';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import Basic_reducers from '../reducer/basic_reducer';
import {useLoginContext} from './login_context';
import {ACCEPT_HEADER, getclient_url, gettype_url} from '../utils/baseurl';
import {
  GETCLIENT_BEGIN,
  GETCLIENT_BEGIN_ERROR,
  GETCLIENT_BEGIN_SUCCESS,
  GETTYPE_BEGIN,
  GETTYPE_BEGIN_ERROR,
  GETTYPE_BEGIN_SUCCESS,
} from '../utils/action';

const Basiccontext = React.createContext();
const initialState = {
  type_loading: false,
  type_array: [],
  clint_loading: false,
  clint_array: [],
};

export const Basicprovider = ({children}) => {
  const {setLogout} = useLoginContext();
  const [state, dispatch] = useReducer(Basic_reducers, initialState);

  const GetTypeget = async props => {
    var Token = await AsyncStorage.getItem('token');
    dispatch({type: GETTYPE_BEGIN});
    axios
      .get(gettype_url, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        // console.log('res-gettype', res.data);
        if (res.data.status === 'Token is Expired') {
          setLogout(props);
        } else {
          if (res.data.success === 1)
            dispatch({type: GETTYPE_BEGIN_SUCCESS, payload: res.data.data});
        }
      })
      .catch(err => {
        dispatch({type: GETTYPE_BEGIN_ERROR});
      });
  };

  const GetClint = async props => {
    var Token = await AsyncStorage.getItem('token');
    dispatch({type: GETCLIENT_BEGIN});
    axios
      .get(getclient_url, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: 'Bearer ' + Token,
        },
      })
      .then(res => {
        // console.log('res-getclint', res.data);
        if (res.data.status === 'Token is Expired') {
          setLogout(props);
        } else {
          if (res.data.success === 1)
            dispatch({type: GETCLIENT_BEGIN_SUCCESS, payload: res.data.data});
        }
      })
      .catch(err => {
        dispatch({type: GETCLIENT_BEGIN_ERROR});
      });
  };

  return (
    <Basiccontext.Provider
      value={{
        ...state,
        GetTypeget,
        GetClint,
      }}>
      {children}
    </Basiccontext.Provider>
  );
};

export const useBasicContext = () => {
  return useContext(Basiccontext);
};
