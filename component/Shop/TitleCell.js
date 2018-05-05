import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class TitleCell extends Component {
  render(){
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={this.props.cellFunction}>
        <View style={styles.cellBar}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={styles.cellIcon} source={{uri:this.props.iconSrc}} />
            <Text style={styles.cellTitle}>{this.props.title}</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text>{this.props.infoText}</Text>
            <Image style={styles.cellArrow} source={{uri:'icon_cell_rightarrow'}} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const DevWidth=require('Dimensions').get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellBar:{
    width:DevWidth,
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    borderBottomColor:'#DDDDDD',
    borderBottomWidth:1
  },
  cellIcon:{
    width:30,
    height:30,
    borderRadius:15
  },
  cellTitle:{
    fontSize:16,
    color:'#000',
    marginLeft:5
  },
  cellArrow:{
    width:15,
    height:15
  }
});