import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {interestList} from '../utils/constants';
const InterestChooser = (props: any) => {
  const {InterestsReturned, selectedData} = props;
  console.log('props', props);
  const renderInterests = ({item, index}) => {
    return (
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: Dimensions.get('screen').width * 0.05,
            // borderWidth: 1,
          }}
          onPress={() => {
            InterestsReturned(item);
            props.handleModal(false);
          }}>
          <Text
            style={{
              color: '#000',
              textAlignVertical: 'center',
              marginRight: 10,
              //   borderWidth: selectedData.includes(item) ? 1 : 0,
            }}>
            {item.courseName}
          </Text>
          {selectedData.includes(item) ? (
            <TouchableOpacity
              onPress={() => {
                InterestsReturned(item);
                props.handleModal(false);
              }}
              style={{
                backgroundColor: '#F1304D',
                borderRadius: 100,
                padding: 1,
              }}>
              <VIcon name={'close'} size={15} color={'#fff'} />
            </TouchableOpacity>
          ) : null}
        </TouchableOpacity>
        <View
          style={{
            marginLeft: Dimensions.get('screen').width * 0.05,
            width: Dimensions.get('screen').width * 0.9,
            borderBottomWidth: 1,
            borderColor: '#F1304D',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(0,0,0,0.4)',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: Dimensions.get('screen').height * 0.35,
          backgroundColor: '#fff',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: Dimensions.get('screen').width,
          //   padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            // Alert.alert('closing modal');
            props.handleModal(false);
          }}
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            // backgroundColor: 'yellow',
          }}>
          <VIcon name="close" size={25} color="red" />
        </TouchableOpacity>
        <Text
          style={{
            height: Dimensions.get('screen').height * 0.05,
            // marginTop: 10,
            color: '#4B9BDE',
            fontWeight: 'bold',
            fontSize: 20,
            // borderWidth: 1,
            textAlignVertical: 'center',
            // textAlign: 'center',
            marginLeft: Dimensions.get('screen').width * 0.05,
          }}>
          Select Interests
        </Text>
        <View
          style={{
            // flex: 1,
            height: Dimensions.get('screen').height * 0.26,
            marginTop: 5,
            marginBottom: 5,
            // borderWidth: 4,
            borderColor: 'yellow',
          }}>
          <FlatList data={interestList} renderItem={renderInterests} />
        </View>
      </View>
    </View>
  );
};

export default InterestChooser;

const styles = StyleSheet.create({});
