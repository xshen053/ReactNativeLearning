import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TouchEventType} from 'react-native-gesture-handler/lib/typescript/TouchEventType';

const Title = props => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  imgPath = require('./images/red_cross.png');
  down = require('./images/down.png');
  up = require('./images/up.png');

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.sectionImage}>
        <Image source={imgPath} style={styles.tick_cross} />
        <Text>Missed</Text>
        <Text>Count: {count}</Text>

        {/* touch button */}
        <TouchableOpacity onPress={onPress}>
          <Image source={down} style={styles.tick_cross} />
        </TouchableOpacity>
        {/* <Text>{this.state.displayData[0].data}</Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionImage: {
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#4b2e83',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    // limit it to a range of square
    maxWidth: '80%',
    fontWeight: 'bold',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  tick_cross: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginLeft: 10,
  },
});

export default Title;
