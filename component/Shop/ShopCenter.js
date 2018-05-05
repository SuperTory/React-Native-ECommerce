import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ShopCenter extends Component {
  render() {
    return (
      <TouchableOpacity  style={styles.container}
        onPress={()=>this.jumpTo(this.props.data.detailurl)}
      >
        <Image source={{uri:this.props.data.img}} style={styles.image} />
        <Text style={styles.imageLabel}>{this.props.data.showtext.text}</Text>
        <Text style={styles.name}>{this.props.data.name}</Text>
      </TouchableOpacity>
    )
  }

  jumpTo(detailurl){
    let url=detailurl;//对url进行处理，去掉url前面没用的部分
    url=detailurl.replace('imeituan://www.meituan.com/web/?url=','');
    this.props.onClick({url:url});//触发父组件onOnclick，并传入url参数
  }
}


const styles = StyleSheet.create({
  container: {
    width:120,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
  },
  image:{
    width:100,
    height:80,
    borderRadius:5
  },
  imageLabel:{
    position:'absolute',
    left:10,
    bottom:30,
    backgroundColor:'#fcff6b'
  },
  name:{
    marginTop:5,
    fontSize:14
  }
});