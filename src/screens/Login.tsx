import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [colors, setColor] = useState('#000');
  return (
    <View style={styles.mainView}>
      <View style={styles.logoView}>
        <Image
          resizeMode="contain"
          style={{
            width: Dimensions.get('screen').width * 1,
            height: Dimensions.get('screen').width * 0.3,
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiwWCpFc4gAmdCBNs4jdn04D0FyVDS8NtmA&usqp=CAU',
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onFocus={i => {
            console.log(i);
            setColor('#F13854');
          }}
          onChangeText={t => {
            setEmail(t);
          }}
          placeholder="enter e-mail"
          placeholderTextColor={'#c0c0c0'}
          style={{...styles.inputBox, borderColor: '#000'}}
        />
        <TextInput
          onFocus={() => {
            setColor('#F13854');
          }}
          value={password}
          onChangeText={t => {
            setPassword(t);
          }}
          placeholder="enter password"
          placeholderTextColor={'#c0c0c0'}
          style={[styles.inputBox, {marginTop: 10, borderColor: '#000'}]}
        />
        <TouchableOpacity
          style={[styles.loginBtn, styles.elevation, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginOptions}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterUser');
          }}>
          <Text style={{color: '#EA1200', fontSize: 18}}>
            Not a user? Register now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoView: {
    flexGrow: 3,
    // borderWidth: 1,
    borderColor: 'red',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexGrow: 4,
    // borderWidth: 1,
    borderColor: 'green',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginOptions: {
    flexGrow: 3,
    // borderWidth: 1,
    borderColor: 'blue',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    color: '#000',
    borderBottomWidth: 1,
    width: Dimensions.get('screen').width * 0.9,

    // paddingBottom: -5,
  },
  loginBtn: {
    // borderWidth: 1,
    backgroundColor: '#F13854',
    width: Dimensions.get('screen').width * 0.9,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
  shadowProp: {
    shadowOffset: {width: -5, height: 2},
    shadowColor: '#850518',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});
