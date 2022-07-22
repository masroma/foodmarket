import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TxtInput} from '../../components';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);
  const onSubmit = () => {
    // console.log('form', form);

    const data = {
      ...form,
      ...registerReducer,
    };
    // navigation.replace('SignUpSuccess');
    // console.log('data register : ', data);
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post('https://api.almalikbuku.com/api/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        // console.log('success', res.data);
        // showToast('register success', 'success');
        dispatch({type: 'SET_LOADING', value: false});
        navigation.replace('SignUpSuccess');
      })
      .catch(err => {
        // console.log('error', err.response.data.message);
        dispatch({type: 'SET_LOADING', value: false});
        showToast(err?.response?.data?.message);
      });
  };

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
    });
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subtitle="Make sure is valid"
          onBack={() => navigation.navigate('signUp')}
        />
        <View style={styles.container}>
          <TxtInput
            label="Phone No"
            placeholder="type your number phone"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TxtInput
            label="Address"
            placeholder="type your Address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TxtInput
            label="House No"
            placeholder="type your number house"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="Kota"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button
            text="Continue"
            bgcolor="#FFC700"
            textcolor="#020202"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
