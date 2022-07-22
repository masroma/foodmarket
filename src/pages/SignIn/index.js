import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TxtInput} from '../../components';
import {useForm} from '../../utils';
import axios from 'axios';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  // const url = "localhost:5000/api/expenses/get-expenses";
  const onSubmit = () => {
    // console.log('form', form);
    axios
      .post('https://api.almalikbuku.com/api/login', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find Your Beast Ever Meal" />
      <View style={styles.container}>
        <TxtInput
          value={form.email}
          onChangeText={value => setForm('email', value)}
          label="email"
          placeholder="type your email"
        />
        <Gap height={16} />
        <TxtInput
          label="password"
          secureTextEntry
          value={form.password}
          onChangeText={value => setForm('password', value)}
          placeholder="type your password"
        />
        <Gap height={24} />
        <Button
          text="Sig In"
          bgcolor="#FFC700"
          textcolor="#020202"
          onPress={onSubmit}
        />
        <Gap height={12} />
        <Button
          text="Create new acoount"
          bgcolor="#8D92A3"
          textcolor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
