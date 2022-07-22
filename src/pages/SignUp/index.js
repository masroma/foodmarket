import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TxtInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign Up" subtitle="Register and eat" onBack={() => {}} />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity>
              <View style={styles.borderPhoto}>
                <View style={styles.photoContainer}>
                  <Text style={styles.addPhoto}>Add Photo</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TxtInput
            label="Full Name"
            placeholder="type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TxtInput
            label="Email"
            placeholder="type your email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap
            height={16}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <TxtInput
            label="Password"
            secureTextEntry
            placeholder="type your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
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

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginTop: 20,
    flex: 1,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {alignItems: 'center', marginTop: 16, marginBottom: 16},
});
