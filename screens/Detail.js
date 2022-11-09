import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const baseUrl = 'https://www.melivecode.com/api/attractions/';

const Detail = ({ navigation, route }) => {

    const [item,setItem] = useState({})

    useEffect(() => {
        fetch(`${baseUrl}${route.params.id}`)
        .then(res => res.json())
        .then(result => {
            setItem(result.attraction)
        })
    },[])
  return (
    <View>
      <Image
        style={styles.coverImg}
        source={{
          uri: item.coverimage,
        }}
      />
      <View style={styles.textBox}>
        <Text style={{fontSize: 23}}>{item.name}</Text>
        <Text>
        {item.detail}
        </Text>
        
      </View>
      <View style={{paddingHorizontal:5, marginTop: 10}}>
      <Button title="Map"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    coverImg: {
      width: '100%',
      height: 333,
    },
    textBox: {
      padding: 5,
      
    },
  });

export default Detail;
