import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const getThreeDays = async coords => {
  const key = '475ec2058a2a4b768a04f9ea9b408777';
  const url = `https://devapi.qweather.com/v7/weather/3d?type=1,2&location=${coords.longitude},${coords.latitude}&key=${key}`;

  try {
    const response = await (await fetch(url)).json();
    if (response.code === '200') {
      return response.daily;
    } else {
      return [];
    }
  } catch (error) {
    console.log('Fetch Error:', error);
  }
};

export const getCityInfo = async coords => {
  const key = '475ec2058a2a4b768a04f9ea9b408777';
  const url = `https://geoapi.qweather.com/v2/city/lookup?location=${coords.longitude},${coords.latitude}&key=${key}`;

  try {
    const response = await (await fetch(url)).json();
    if (response.code === '200') {
      return response.location[0];
    } else {
      return [];
    }
  } catch (error) {
    console.log('Fetch Error:', error);
  }
};

export const getIndices = async coords => {
  const key = '475ec2058a2a4b768a04f9ea9b408777';
  const url = `https://devapi.qweather.com/v7/indices/1d?type=0&location=${coords.longitude},${coords.latitude}&key=${key}`;

  try {
    const response = await (await fetch(url)).json();
    if (response.code === '200') {
      return response.daily;
    } else {
      return [];
    }
  } catch (error) {
    console.log('Fetch Error:', error);
  }
};
