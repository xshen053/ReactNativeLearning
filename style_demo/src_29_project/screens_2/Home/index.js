import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getCityInfo} from '../../utils/api';
import {getIndices} from '../../utils/api';
import {getThreeDays} from '../../utils/api';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      city: {},
      indices: [],
    };
  }

  componentDidMount() {
    // const location = storage.get('coords');
    // // if local storage doesn't have that cordinate
    // if (location === undefined || location == '') {
    //   // get location
    //   Geolocation.getCurrentPosition(
    //     info => console.log(info),
    //     // store location after get it successfully
    //     AsyncStorage.setItem('coords', JSON.stringify(info.coords)),
    //     error => alert('error', JSON.stringify(error)),
    //     {
    //       timeout: 20000,
    //     },
    //   );
    // }
    const coords = {
      longitude: 112.333,
      latitude: 39.444,
    };
    console.log(coords);

    getCityInfo(coords).then(res => {
      console.log(res);
      this.setState({
        city: res,
      });
    });

    getIndices(coords).then(res => {
      console.log(res);
      this.setState({
        indices: res,
      });
    });
  }
  indicesItem = ({index, item}) => {
    return (
      <TouchableOpacity
        key={'index' + item.type}
        onPress={() => {
          alert(item.type);
        }}>
        <View style={[styles.indexItem]}>
          <Text style={[styles.indexName]}>{item.name}</Text>
          <Text style={[styles.indexBase]}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={[styles.city]}>
            <Text style={[styles.cityText]}>
              {this.state.city.country} {this.state.city.adm1}{' '}
              {this.state.city.adm2}
            </Text>
          </View>
          <View style={[styles.indexContainer]}>
            <FlatList
              data={this.state.indices}
              renderItem={this.indicesItem}
              keyExtractor={item => item.type}
              horizontal={true}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  city: {
    flex: 1,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  indexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  indexItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#deb',
    width: Dimensions.get('window').width / 3 - 10,
    height: 80,
    merginTop: 10,
    marginRight: 10,
  },
  indexName: {
    color: '#222',
    fontSize: 14,
  },
  indexBase: {
    color: '#00b38a',
    FontSize: 15,
  },
});
