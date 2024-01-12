//import : react components
import {Alert} from 'react-native';
//third parties
//import : axios
import axios from 'axios';
import Toast from 'react-native-toast-message';

//endpoint : base_url
export const BASE_URL = ``;

//function : post API
export const postAPI = async (endPoint, postData, token = '') => {
  const url = BASE_URL + endPoint;
  return await axios
    .post(url, postData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return {
        response: response?.data,
        status: response?.data?.status,
        msg: response?.data?.msg,
      };
    })
    .catch(error => {
      return {
        response: error,
        status: false,
        msg: error.response.data.msg,
      };
    });
};

//function :  get api
export const getApi = endPoint =>
  axios
    .get(`${BASE_URL}${endPoint}`)
    .then(res => {
      return res;
    })
    .catch(error => {
      if (error?.response?.status === 422) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log(error.response.headers);
      } else if (error?.response?.status === 404) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else if (error?.response?.status === 401) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else if (error?.response?.status === 500) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      }
    });
//function :  get api with token
export const getApiWithToken = (token, endPoint) =>
  axios
    .get(`${BASE_URL}${endPoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      if (error?.response?.status === 422) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log(error.response.headers);
      } else if (error?.response?.status === 404) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else if (error?.response?.status === 401) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else if (error?.response?.status === 500) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      }
    });
//function :  post api
export const postApi = (endPoint, data) =>
  axios
    .post(`${BASE_URL}${endPoint}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: '*/*',
      },
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log('data', error.response.data);
      console.log('status', error.response.status);
      console.log('header', error.response.headers);
      if (error?.response?.status === 422) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else if (error?.response?.status === 404) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else if (error?.response?.status === 401) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else if (error?.response?.status === 500) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else if (error?.response?.status === 0) {
        // Alert.alert(
        //   '',
        //   `Internet connection appears to be offline. Please check your internet connection and try again.`,
        // );
        Toast.show({
          text1:
            'Internet connection appears to be offline. Please check your internet connection and try again.',
        });
      } else {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      }
    });

//function : post api with token
export const postApiWithToken = (token, endPoint, data) =>
  axios
    .post(`${BASE_URL}${endPoint}`, data, {
      headers:
        Object.keys(data).length > 0
          ? {
              'Content-Type': 'multipart/form-data',
              Accept: '*/*',
              Authorization: `Bearer ${token}`,
            }
          : {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log('error', error);
      if (error?.response?.status === 422) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log(error.response.headers);
      } else if (error?.response?.status === 404) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else if (error?.response?.status === 401) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else if (error?.response?.status === 500) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      } else {
        // Alert.alert('', `${error}`);
        Toast.show({text1: error.response.data.message});
        console.log('error status', error?.response?.status);
        console.log('error message', error.response.data.message);
      }
    });
//function : post api with json data
export const postJsonApiWithToken = (token, endPoint, data) =>
  axios
    .post(`${BASE_URL}${endPoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      if (error?.response?.status === 422) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
        console.log(error.response.headers);
      } else if (error?.response?.status === 404) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else if (error?.response?.status === 401) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else if (error?.response?.status === 500) {
        // Alert.alert('', `${error.response.data.message}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      } else {
        // Alert.alert('', `${error}`);
        Toast.show({text1: error.response.data.message});
        console.log('data', error.response.data);
        console.log('status', error.response.status);
      }
    });
