import AsyncStorage from '@react-native-async-storage/async-storage';

export default class storage {
  /**
   * add Data
   *
   * @param {string} key
   * @param {mixed} value
   *
   * @returns {Promise}
   */
  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * get value
   *
   * @param {string} key
   * @returns
   */
  static get(key) {
    return AsyncStorage.getItem(key)
      .then(value => {
        if (value && value !== '') {
          const jsonValue = JSON.parse(value);
          return jsonValue;
        }
      })
      .catch(() => null);
  }

  /**
   * update vallue
   *
   * @param {string} key
   * @param {mixed} newValue
   * @returns {Promise}
   */
  static update(key, newValue) {
    return AsyncStorage.getItem(key).then(oldValue => {
      newValue =
        typeof newValue === 'string'
          ? newValue
          : Object.assign({}, oldValue, newValue);
      return AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  }

  /**
   * delete a key
   * @param {string} key
   *
   * @returns {Promise}
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }

  /**
   * clear all data
   *
   */
  static clear() {
    console.log('clear function called');
    return AsyncStorage.clear();
  }
}
