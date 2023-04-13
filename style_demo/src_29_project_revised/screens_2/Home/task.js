import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Title from './title';
import Content from './content';
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}));
  };
  render() {
    return (
      <View style={styles.items}>
        <Title text={this.props.time} toggleContent={this.toggle} />
        {this.state.showContent && <Content />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    // textAlign: 'center',
    justifyContent: 'center',

    marginBottom: 20,
  },
  date: {
    fontSize: 30,
  },
  items: {
    marginTop: 20,
  },
});
