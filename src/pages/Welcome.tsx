import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, } from 'react-native';
import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {
  const [visible, setVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencia {'\n'}
        sua plantas {'\n'}
        de forma fácil
      </Text>      

      <Image source={wateringImg} style={styles.image}/>
     
      {visible &&        
        <Text style={styles.subTitle}>
          Teste Visible 
        </Text>
      }
      
      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de elmbrar você sempre que precisar.
      </Text>

      <Button title=">" onPress={()=> { setVisible(!visible)}}/>
          
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subTitle: {
    fontSize: 18,    
    textAlign: 'center',
    color: colors.heading,
    paddingHorizontal: 20,
  },
  image: {
    width: 292,
    height: 284,
  },
});

