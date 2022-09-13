import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const RadioButton = (props: any) => {
  const {data, label, labelStyle, parentFunction} = props;
  const [selected, setSelected] = useState(data[0]);
  return (
    <View
      style={{
        height: Dimensions.get('screen').height * 0.08,
        // borderWidth: 1,
        // width: Dimensions.get('screen').width * 0.6,
        marginTop: 10,
      }}>
      <Text style={labelStyle ? labelStyle : {}}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          //   borderWidth: 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {data &&
          data.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{flexDirection: 'row'}}
                onPress={() => {
                  parentFunction(item);
                  setSelected(item);
                }}>
                <VIcon
                  name={
                    selected.name == item.name
                      ? 'radiobox-marked'
                      : 'radiobox-blank'
                  }
                  color="#000"
                  size={30}
                />
                <Text
                  style={{
                    color: '#000',
                    // borderWidth: 1,
                    textAlignVertical: 'center',
                    marginLeft: 10,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
