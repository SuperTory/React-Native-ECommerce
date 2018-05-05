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

export default class SmallBlock extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={[{color:this.props.data.typeface_color},styles.title]}>
            {this.props.data.title}
          </Text>
          <Text>{this.props.data.deputytitle}</Text>
        </View>
        <Image source={{uri:this.handleUrl(this.props.data.imageurl)}} style={styles.image}/>

      </TouchableOpacity>
    )
  }
  handleUrl(url){
    let imageUrl='';
    if(url.indexOf('w.h')===-1){
      imageUrl=url;
    }else {//美团的图片url中有w.h字段，代表图片的长与宽，需要替换后才能访问
      imageUrl=url.replace('w.h','60.60');
    }
    return imageUrl;
  }
}


const styles = StyleSheet.create({
  container: {
    width:DevWidth*0.5-1,
    height:59,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:5
  },
  title:{
    fontSize:18
  },
  image:{
    width:60,
    height:60,
    resizeMode:'contain'
  }
});