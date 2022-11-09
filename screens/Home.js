import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const baseUrl = 'https://www.melivecode.com/api/attractions';

const Home = ({navigation}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });
  }, []);

  const onPressDetail = id => {
    navigation.navigate('Detail', {id: id});
  };
  return (
    <ScrollView>
      {items.map(item => (
        <View key={item.id}>
          <Pressable onPress={() => onPressDetail(item.id)}>
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
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coverImg: {
    width: '100%',
    height: 333,
  },
  textBox: {
    padding: 5,
    marginBottom: 15
  },
});

export default Home;
