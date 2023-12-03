import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000/' })




export default function App() {
  const [data, setdata] = useState('')
  const [HasErr, setHasErr] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
    setHasErr(false)
    const getdata = async () => {

      await axiosInstance.get('/student')
        .then(Response => {
          console.log(Response);
          setdata(Response.data)
        })
        .catch(error => {
          setHasErr(true)
          console.log(error);
        })
        .finally(() => {
          setIsloading(false)
        })
    }
    getdata()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>```LOADING```</Text>
      </View>
    )
  }
  else if (HasErr) {
    return (
      <View style={styles.containerErr}>
        <Text>HAS ERROR</Text>
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(data)}</Text>
        <StatusBar style="auto" />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerErr: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
