import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const DevWidth=require('Dimensions').get('window').width;

export default class LargeBlock extends Component {
  render() {
    let imageUrl='';
    if(this.props.data.imageurl.indexOf('w.h')===-1){
      imageUrl=this.props.data.imageurl;
    }else {
      imageUrl=this.props.data.imageurl.replace('w.h','60.60');
    }
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={[{color:this.props.data.typeface_color},styles.title]}>
            {this.props.data.title}
          </Text>
          <Text>{this.props.data.deputytitle}</Text>
        </View>
        <Image source={{uri:imageUrl}} style={styles.image}/>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width:DevWidth,
    height:59,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:10
  },
  title:{
    fontSize:25
  },
  image:{
    width:100,
    height:100,
    resizeMode:'contain'
  }
});