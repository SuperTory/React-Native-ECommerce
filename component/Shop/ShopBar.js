import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:this.handleUrl(this.props.data.imageUrl)}} />
        <View style={styles.info}>
          <View style={styles.topInfo}>
            <Text style={styles.title}>{this.props.data.title}</Text>
            <Text style={styles.topRight}>{this.props.data.topRightInfo}</Text>
          </View>
          <Text>{this.props.data.subTitle}</Text>
          <View style={styles.bottomInfo}>
            <Text style={styles.price}>价格：¥{this.props.data.mainMessage2}</Text>
            <Text>{this.props.data.bottomRightInfo}</Text>
          </View>
        </View>

      </View>
    )
  }
  handleUrl(url){
    let imageUrl='';
    if(url.indexOf('w.h')===-1){
      imageUrl=url;
    }else {//美团的图片url中有w.h字段，代表图片的长与宽，需要替换后才能访问
      imageUrl=url.replace('w.h','120.80');
    }
    return imageUrl;
  }
}

const DevWidth=require('Dimensions').get('window').width;
const styles = StyleSheet.create({
  container: {
    width:DevWidth,
    height:100,
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'#DDDDDD',
    borderBottomWidth:1,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#fff'
  },
  image:{
    width:120,
    height:80,
    marginRight:10,
    borderRadius:10
  },
  info:{
    flex:1,
  },
  topInfo:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title:{
    color:'#000',
    fontSize:16,
    marginBottom:10
  },
  topRight:{
    color:'#4f95ff'
  },
  bottomInfo:{
    marginTop:5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  price:{
    color:'#ff8b69'
  }
});