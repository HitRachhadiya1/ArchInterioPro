import {AsyncStorage} from 'react-native';
import {
  GETCLIENT_BEGIN,
  GETCLIENT_BEGIN_ERROR,
  GETCLIENT_BEGIN_SUCCESS,
  GETTYPE_BEGIN,
  GETTYPE_BEGIN_ERROR,
  GETTYPE_BEGIN_SUCCESS,
} from '../utils/action';

const Basic_reducers = (state, action) => {
  switch (action.type) {
    case GETTYPE_BEGIN:
      return {...state, type_loading: true};

    case GETTYPE_BEGIN_SUCCESS:
      return {...state, type_array: action.payload, type_loading: false};

    case GETTYPE_BEGIN_ERROR:
      return {...state, type_loading: false};

    case GETCLIENT_BEGIN:
      return {...state, clint_loading: true};

    case GETCLIENT_BEGIN_SUCCESS:
      return {...state, clint_array: action.payload, clint_loading: false};

    case GETCLIENT_BEGIN_ERROR:
      return {...state, clint_loading: false};

    default:
      return {...state};
  }
};

export default Basic_reducers;
