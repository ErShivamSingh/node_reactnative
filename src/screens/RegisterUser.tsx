import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RadioButton from '../components/RadioButton';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import InterestChooser from '../components/InterestChooser';
import UsersAPI from '../API/UsersAPI';
import Axios from 'axios';
const RegisterUser = () => {
  const navigation = useNavigation();
  const [useless, setuseless] = useState(false);
  const {width, height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [showModal, setShowModal] = useState(false);
  let [Intrests, setInterests] = useState([]);
  const handleGender = (data: any) => {
    setGender(data?.name);
  };
  const handleModal = (data: boolean) => {
    // console.log('FLAG::::', data);
    setShowModal(false);
  };
  const InterestsReturned = (data: any) => {
    if (Intrests.includes(data)) {
      console.log('yes');
      const ind = Intrests.indexOf(data);
      Intrests.splice(ind, 1);
    } else {
      console.log('No');
      Intrests.push(data);
    }
    console.log('data', Intrests);
  };
  const createUser = async () => {
    const ob = {
      name: {firstName: 'shivam', lastName: 'singh'},
      age: 12,
      password: 'abc@123',
      gender: 'Male',
      interests: Intrests,
      email: 'ss204153@gmail.com',
    };
    // const data = await UsersAPI.addUsers(ob);
    console.log('data::', ob);
    await Axios.get('http://192.168.0.220/get-users')
      .then(res => {
        console.log('result', res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.mainView}>
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
            width: Dimensions.get('screen').width * 0.9,
          }}>
          <TextInput
            value={password}
            onChangeText={t => {
              setPassword(t);
            }}
            maxLength={20}
            placeholder="enter first name"
            placeholderTextColor={'#c0c0c0'}
            style={[styles.username]}
          />
          <TextInput
            value={password}
            onChangeText={t => {
              setPassword(t);
            }}
            maxLength={20}
            placeholder="enter last name"
            placeholderTextColor={'#c0c0c0'}
            style={[styles.username]}
          />
        </View>
        <TextInput
          value={email}
          keyboardType={'number-pad'}
          onChangeText={t => {
            setEmail(t);
          }}
          placeholder="Enter Age"
          placeholderTextColor={'#c0c0c0'}
          style={styles.inputBox}
        />
        <TextInput
          value={email}
          keyboardType={'number-pad'}
          onChangeText={t => {
            setEmail(t);
          }}
          placeholder="Enter email"
          placeholderTextColor={'#c0c0c0'}
          style={styles.inputBox}
        />
        <View style={{width: Dimensions.get('screen').width * 0.9}}>
          <RadioButton
            parentFunction={handleGender}
            data={[
              {id: 1, name: 'Male'},
              {id: 2, name: 'Female'},
            ]}
            label={'Gender'}
            labelStyle={{color: '#000', fontWeight: 'bold', fontSize: 17}}
          />
        </View>
        {/* <View style={{backgroundColor: 'red', height: 5}}></View> */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            width: Dimensions.get('screen').width * 0.9,
            //   borderWidth: 1,
            alignItems: 'center',
          }}>
          <Text style={{color: '#032AC9', fontSize: 18}}>Intrests</Text>

          <TouchableOpacity onPress={() => setShowModal(true)}>
            <VIcon
              name="plus"
              size={13}
              color={'#fff'}
              style={{
                // borderWidth: 1
                padding: 1,
                textAlign: 'center',
                textAlignVertical: 'center',
                borderRadius: 4,
                backgroundColor: '#0360AE',
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        {Intrests.map((item, index) => (
          <View
            style={{
              //   borderWidth: 1,
              flexDirection: 'row',
              // width: 60,
              alignSelf: 'flex-start',
              marginLeft: Dimensions.get('screen').width * 0.05,
              alignItems: 'center',
              borderRadius: 100,
              paddingLeft: 5,
              paddingRight: 2,
              paddingTop: 2,
              marginBottom: Intrests.length > 3 ? 5 : 0,
              paddingBottom: 2,
              marginRight: 5,

              backgroundColor: '#F13854',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              {item?.courseName}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setuseless(!useless);
                InterestsReturned(item);
              }}>
              <VIcon
                name="close"
                color="#F13854"
                size={15}
                style={{
                  marginLeft: 5,
                  backgroundColor: '#fff',
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}

        <TextInput
          value={password}
          onChangeText={t => {
            setPassword(t);
          }}
          placeholder="enter password"
          placeholderTextColor={'#c0c0c0'}
          style={{...styles.inputBox}}
        />
        <TextInput
          value={password}
          onChangeText={t => {
            setPassword(t);
          }}
          placeholder="enter Confirm password"
          placeholderTextColor={'#c0c0c0'}
          style={[styles.inputBox]}
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            createUser();
          }}>
          <Text style={{fontWeight: 'bold'}}>Register Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginOptions}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: '#EA1200', fontSize: 18}}>
            Already have an account? Login now
          </Text>
        </TouchableOpacity>
      </View>
      {showModal ? (
        <InterestChooser
          selectedData={Intrests}
          handleModal={handleModal}
          InterestsReturned={InterestsReturned}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoView: {
    // flexGrow: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    // flexGrow: 3,
    height: Dimensions.get('screen').height * 0.7,
    // borderWidth: 1,
    // borderColor: 'green',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  inputBox: {
    color: '#000',
    borderBottomWidth: 1,
    width: Dimensions.get('screen').width * 0.9,
    // paddingBottom: -5,
    marginTop: 15,
  },
  username: {
    width: Dimensions.get('screen').width * 0.4,
    borderBottomWidth: 1,
  },
  loginBtn: {
    // borderWidth: 1,

    backgroundColor: '#F13854',
    width: Dimensions.get('screen').width * 0.9,
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginOptions: {
    // flexGrow: 3,
    // borderWidth: 1,
    // backgroundColor: 'red',
    height: Dimensions.get('screen').height * 0.1,
    flex: 1,
    borderColor: 'blue',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
