import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const DevWidth=require('Dimensions').get('window').width;

export default class MediumBlock extends Component{
  render(){
    return (
      <TouchableOpacity style={styles.container}>
        <Image source={{uri:this.props.data.image1}} style={styles.topImage}/>
        <Image source={{uri:this.props.data.image2}} style={styles.topImage} />
        <Text style={styles.title}>{this.props.data.title}</Text>
        <View style={styles.subtitle}>
          <Text style={{color:'#63daff'}}>{this.props.data.price}</Text>
          <Text style={{color:'#ff5b5d',backgroundColor:'#fcff6b'}}>{this.props.data.sale}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width:DevWidth*0.5-1,
    height:120,
    justifyContent:'center',
    alignItems:'center'
  },
  topImage:{
    width:80,
    height:30,
    resizeMode:'contain'
  },
  title:{
    fontSize:18
  },
  subtitle:{
    flexDirection:'row'
  }
});